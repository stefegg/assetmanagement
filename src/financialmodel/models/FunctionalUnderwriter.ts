import { useState, useCallback, useMemo } from "react";
import { Node } from "./Node";
import { ModelConfig } from "../types/config/ModelConfig";

interface UseUnderwriterProps {
  dealName: string;
  dealType: string;
  length: number;
  startDate: Date;
  config: ModelConfig;
  results: string[];
}

interface UseUnderwriterReturn {
  dealName: string;
  dealType: string;
  months: number[];
  dates: Date[];
  financialModel: Node | null;
  cashflowNodeMap: Map<string, Node>;
  resultNodeMap: Map<string, Node>;
  initializeFinancialModel: () => void;
  updateCashflowNode: (nodeName: string, cashflows: number[]) => void;
  updateResultNode: (nodeName: string, result: number) => void;
  calculateDeal: () => void;
  getNodeByName: (nodeName: string) => Node | null;
  listAllNodeNames: () => string[];
}

export const useUnderwriter = ({
  dealName,
  dealType,
  length,
  startDate,
  config,
  results,
}: UseUnderwriterProps): UseUnderwriterReturn => {
  // State for the financial model
  const [financialModel, setFinancialModel] = useState<Node | null>(null);
  const [cashflowNodeMap, setCashflowNodeMap] = useState<Map<string, Node>>(new Map());
  const [resultNodeMap, setResultNodeMap] = useState<Map<string, Node>>(new Map());

  // Memoized months and dates arrays
  const months = useMemo(() => Array.from({ length }, (_, i) => i + 1), [length]);
  const dates = useMemo(
    () =>
      Array.from({ length }, (_, i) => {
        const date = new Date(startDate);
        date.setUTCMonth(date.getUTCMonth() + i);
        return date;
      }),
    [length, startDate]
  );

  // Initialize the financial model from config
  const initializeFinancialModel = useCallback(() => {
    const newCashflowNodeMap = new Map<string, Node>();
    const newResultNodeMap = new Map<string, Node>();

    // Build the tree from our config object
    const buildNodeFromConfig = (config: ModelConfig, parent: Node | null): Node => {
      const isLeaf = !config.children || config.children.length === 0;
      const node = new Node(Array(length).fill(0), config.name, "", [], false, isLeaf, length);
      
      newCashflowNodeMap.set(config.name, node);

      if (parent) {
        parent.addChild(node);
      }

      if (config.children && config.children.length > 0) {
        config.children.forEach((childConfig) => {
          buildNodeFromConfig(childConfig, node);
        });
      }

      return node;
    };

    const rootNode = buildNodeFromConfig(config, null);
    setFinancialModel(rootNode);
    setCashflowNodeMap(newCashflowNodeMap);

    // Initialize result nodes
    results.forEach((result) => {
      const resultNode = new Node(
        Array(length).fill(0),
        result,
        "",
        [],
        false,
        false,
        length,
        "result",
        0
      );
      newResultNodeMap.set(result, resultNode);
    });
    setResultNodeMap(newResultNodeMap);
  }, [config, length, results]);

  // Update cashflow node
  const updateCashflowNode = useCallback((nodeName: string, cashflows: number[]) => {
    const node = cashflowNodeMap.get(nodeName);
    if (!node) {
      throw new Error(`Node '${nodeName}' not found in cashflow nodes`);
    }
    if (cashflows.length !== node.length) {
      throw new Error(`Cashflow length (${cashflows.length}) does not match node length (${node.length})`);
    }

    // Update the node's cashflow and mark it for update
    node.updateCashflow(cashflows);
    
    // Create a new Map with the updated node
    const newCashflowNodeMap = new Map(cashflowNodeMap);
    newCashflowNodeMap.set(nodeName, node);
    
    // Update the state
    setCashflowNodeMap(newCashflowNodeMap);
    
    // Recalculate the entire deal
    if (financialModel) {
      financialModel.calculate();
    }
  }, [cashflowNodeMap, financialModel]);

  // Update result node
  const updateResultNode = useCallback((nodeName: string, result: number) => {
    const node = resultNodeMap.get(nodeName);
    if (!node) {
      throw new Error(`Node '${nodeName}' not found in result nodes`);
    }
    node.result = result;
  }, [resultNodeMap]);

  // Calculate the entire deal
  const calculateDeal = useCallback(() => {
    if (financialModel) {
      financialModel.calculate();
    } else {
      throw new Error("Financial model is not initialized");
    }
  }, [financialModel]);

  // Get node by name
  const getNodeByName = useCallback((nodeName: string): Node | null => {
    return cashflowNodeMap.get(nodeName) || resultNodeMap.get(nodeName) || null;
  }, [cashflowNodeMap, resultNodeMap]);

  // List all node names
  const listAllNodeNames = useCallback((): string[] => {
    return Array.from(cashflowNodeMap.keys());
  }, [cashflowNodeMap]);

  return {
    dealName,
    dealType,
    months,
    dates,
    financialModel,
    cashflowNodeMap,
    resultNodeMap,
    initializeFinancialModel,
    updateCashflowNode,
    updateResultNode,
    calculateDeal,
    getNodeByName,
    listAllNodeNames,
  };
}; 
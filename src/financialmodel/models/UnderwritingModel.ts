import { Node } from "./Node"; // Assuming Node is exported from a separate file
import { ModelConfig } from "../types/config/ModelConfig";

export class UnderwritingModel {
  dealName: string;
  dealType: string;
  months: number[];
  dates: Date[];
  financialModel: Node | null;
  cashflowNodeMap: Map<string, Node>;
  resultNodeMap: Map<string, Node>;

  constructor(dealName: string, dealType: string, length: number, startDate: Date, config: ModelConfig, results: string[]) {
    this.dealName = dealName;
    this.dealType = dealType;

    this.months = Array.from({ length }, (_, i) => i + 1);
    this.dates = Array.from({ length }, (_, i) => {
      const date = new Date(startDate);
      date.setUTCMonth(date.getUTCMonth() + i);
      return date;
    });
    this.financialModel = null;
    this.cashflowNodeMap = new Map<string, Node>();
    this.resultNodeMap = new Map<string, Node>();
    this.initializeFinancialModelFromConfig(config, length);

    results.forEach((result) => {
      const resultNode = new Node(Array(length).fill(0), result, "", [], false, false, length, "result", 0);
      this.resultNodeMap.set(result, resultNode);
    });
  }

  private initializeFinancialModelFromConfig(config: ModelConfig, length: number): void {
    // Build the tree from our config object
    const rootNode = this.buildNodeFromConfig(config, length, null);

    // The top node is your "Levered Cashflow" node
    this.financialModel = rootNode;
  }

  /**
   * Recursively builds a Node (and all its children) from a config object.
   * Equivalent to what generateNodeWithZeroes + manual linking used to do.
   */
  private buildNodeFromConfig(config: ModelConfig, length: number, parent: Node | null): Node {
    // Create a node with zeroed-out cashflows
    // if there's no children array or it's empty => leaf node
    const isLeaf = !config.children || config.children.length === 0;

    // Create a node with zeroed-out cashflows
    const node = new Node(Array(length).fill(0), config.name, "", [], false, isLeaf, length);

    // Store it in your nodeMap
    this.cashflowNodeMap.set(config.name, node);

    // Link it to its parent
    if (parent) {
      parent.addChild(node);
    }

    // If there are children, process them recursively
    if (config.children && config.children.length > 0) {
      config.children.forEach((childConfig) => {
        this.buildNodeFromConfig(childConfig, length, node);
      });
    }

    return node;
  }

  /**
   * Lists all node names within the deal.
   * @returns An array of node names.
   */
  public listAllNodeNames(): string[] {
    return Array.from(this.cashflowNodeMap.keys());
  }

  // Shallow clone: copies all fields and preserves the prototype
  public clone(): UnderwritingModel {
    // 1. Create an empty object with the same prototype
    const clone = Object.create(Object.getPrototypeOf(this));

    // 2. Copy all own properties over (dealName, months, etc.)
    return Object.assign(clone, this);
  }

  // Possibly add a helper to update properties
  public updateFields(newData: Partial<UnderwritingModel>) {
    // Just assign them in place (dealName, financialModel, etc.)
    Object.assign(this, newData);
  }

  /**
   * Updates the cashflows of a node by its name
   * @param nodeName The name of the node to update
   * @param cashflows The new cashflow values
   * @throws Error if node is not found or if cashflow length is invalid
   */
  public updateCashflowNode(nodeName: string, cashflows: number[]): void {
    const node = this.cashflowNodeMap.get(nodeName);
    if (!node) {
      throw new Error(`Node '${nodeName}' not found in cashflow nodes`);
    }
    if (node && cashflows.length !== node.length) {
      throw new Error(`Cashflow length (${cashflows.length}) does not match node length (${node.length})`);
    }

    node.updateCashflow(cashflows);
  }

  /**
   * Updates a result node's value by its name
   * @param nodeName The name of the result node to update
   * @param result The new result value
   * @throws Error if node is not found
   */
  public updateResultNode(nodeName: string, result: number): void {
    const node = this.resultNodeMap.get(nodeName);
    if (!node) {
      throw new Error(`Node '${nodeName}' not found in result nodes`);
    }
    node.result = result;
  }

  public calculateDeal(): void {
    if (this.financialModel) {
      this.financialModel.calculate();
    } else {
      throw new Error("Financial model is not initialized");
    }
  }
  public getNodeByName(nodeName: string): Node | null {
    const node = this.cashflowNodeMap.get(nodeName) || this.resultNodeMap.get(nodeName);
    if (!node) {
      return null;
    }
    return node;
  }
}

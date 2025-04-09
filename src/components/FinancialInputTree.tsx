"use client"

import * as React from "react"
import { ModelConfig } from "../financialmodel/types/config/ModelConfig"
import { useUnderwriter } from "../financialmodel/models/FunctionalUnderwriter"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Node } from "../financialmodel/models/Node"
import { Button } from "./ui/button"
import { Plus, Minus } from "lucide-react"

// Constants for layout
const BASE_NODE_WIDTH = 140
const BASE_NODE_HEIGHT = 40
const H_SPACING = 180 // Horizontal spacing between parent and child nodes
const V_SPACING = 40  // Vertical spacing between sibling nodes
const BUTTON_SIZE = 24 // Size of expand/collapse button

interface TreePosition {
  id: number
  name: string
  x: number
  y: number
  parentId?: number
  parentX?: number
  parentY?: number
  path: string
  model: ModelConfig
}

interface FinancialInputTreeProps {
  root: ModelConfig
  dealName: string
  dealType: string
  length: number
  startDate: Date
  results: string[]
}

export function FinancialInputTree({
  root,
  dealName,
  dealType,
  length,
  startDate,
  results,
}: FinancialInputTreeProps) {
  const {
    financialModel,
    cashflowNodeMap,
    initializeFinancialModel,
    updateCashflowNode,
  } = useUnderwriter({
    dealName,
    dealType,
    length,
    startDate,
    config: root,
    results,
  })

  // Track expanded nodes
  const [expandedNodes, setExpandedNodes] = React.useState<{ [key: string]: boolean }>({})
  // Track input values
  const [inputValues, setInputValues] = React.useState<{ [key: string]: string }>({})

  // Initialize the model on mount
  React.useEffect(() => {
    initializeFinancialModel()
  }, [initializeFinancialModel])

  // Update input values when cashflowNodeMap changes
  React.useEffect(() => {
    if (cashflowNodeMap) {
      const newInputValues: { [key: string]: string } = {}
      cashflowNodeMap.forEach((node, name) => {
        newInputValues[name] = node.cashflows[0].toString()
      })
      setInputValues(newInputValues)
    }
  }, [cashflowNodeMap])

  // Layout state for positioning nodes
  const [layout, setLayout] = React.useState<TreePosition[]>([])

  const toggleExpand = (path: string) => {
    setExpandedNodes((prev) => ({ ...prev, [path]: !prev[path] }))
  }

  // Compute the tree layout
  React.useEffect(() => {
    if (!financialModel) return

    const positions: TreePosition[] = []
    let idCounter = 0

    // Recursively count leaves
    function getSubtreeLeafCount(node: Node, path: string): number {
      if (!node.children || node.children.length === 0 || !expandedNodes[path]) {
        return 1
      }
      return node.children.reduce((sum, child, index) => {
        const childPath = `${path}-${index}`
        return sum + getSubtreeLeafCount(child, childPath)
      }, 0)
    }

    // Recursively assign positions to nodes
    function layoutSubtree(
      node: Node,
      depth: number,
      top: number,
      bottom: number,
      path: string,
      parent?: TreePosition
    ) {
      const centerY = (top + bottom) / 2
      const currentId = idCounter++
      const currentNode: TreePosition = {
        id: currentId,
        name: node.name,
        x: depth * H_SPACING,
        y: centerY,
        path,
        model: { name: node.name, children: [] }
      }

      if (parent) {
        currentNode.parentId = parent.id
        currentNode.parentX = parent.x
        currentNode.parentY = parent.y
      }

      positions.push(currentNode)

      if (node.children && node.children.length > 0 && expandedNodes[path]) {
        let accumulated = top
        node.children.forEach((child, index) => {
          const childPath = `${path}-${index}`
          const count = getSubtreeLeafCount(child, childPath)
          const childBlockHeight = count * (BASE_NODE_HEIGHT + V_SPACING) - V_SPACING
          const childTop = accumulated
          const childBottom = accumulated + childBlockHeight
          layoutSubtree(child, depth + 1, childTop, childBottom, childPath, currentNode)
          accumulated = childBottom + V_SPACING
        })
      }
    }

    // Calculate overall height from the total leaves
    const totalLeaves = getSubtreeLeafCount(financialModel, "0")
    const totalHeight = totalLeaves * (BASE_NODE_HEIGHT + V_SPACING) - V_SPACING

    // Begin layout from depth 0 within the vertical range [0, totalHeight]
    layoutSubtree(financialModel, 0, 0, totalHeight, "0")
    setLayout(positions)
  }, [financialModel, expandedNodes])

  // Handle input changes
  const handleInputChange = (nodeName: string, value: string) => {
    // Update local state immediately for responsive UI
    setInputValues(prev => ({ ...prev, [nodeName]: value }))

    // Parse the numeric value
    const numericValue = parseFloat(value)
    if (isNaN(numericValue)) return

    // Get the node from the map
    const node = cashflowNodeMap.get(nodeName)
    if (!node) return

    // Create a new cashflow array with the updated value
    const newCashflows = Array(node.length).fill(0)
    newCashflows[0] = numericValue // Set the first period's value

    // Update the node's cashflow
    updateCashflowNode(nodeName, newCashflows)
  }

  if (!financialModel) return null

  const maxX = Math.max(...layout.map((pos) => pos.x))
  const maxY = Math.max(...layout.map((pos) => pos.y))
  const containerWidth = maxX + BASE_NODE_WIDTH + 50
  const containerHeight = maxY + BASE_NODE_HEIGHT + 50

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">
        Financial Model Input Tree
      </div>
      <div className="text-md font-medium">
        Gross Levered Cashflow: {financialModel?.cashflows[0] || 0}
      </div>
      <div className="relative overflow-auto border rounded p-4" style={{ width: "100%", height: "80vh" }}>
        {/* Draw connector lines */}
        <svg
          className="absolute top-0 left-0"
          width={containerWidth}
          height={containerHeight}
          style={{ pointerEvents: "none" }}
        >
          {layout.map((node) => {
            if (node.parentId !== undefined) {
              return (
                <line
                  key={`edge-${node.id}`}
                  x1={node.parentX! + BASE_NODE_WIDTH + BUTTON_SIZE/2}
                  y1={node.parentY! + BASE_NODE_HEIGHT / 2}
                  x2={node.x}
                  y2={node.y + BASE_NODE_HEIGHT / 2}
                  stroke="#999"
                  strokeWidth="2"
                />
              )
            }
            return null
          })}
        </svg>

        {/* Render nodes */}
        {layout.map((node) => {
          const value = inputValues[node.name] || "0"
          const nodeModel = cashflowNodeMap.get(node.name)
          const hasChildren = nodeModel?.children && nodeModel.children.length > 0

          return (
            <div key={node.id} className="absolute" style={{ left: node.x, top: node.y }}>
              <Card className="flex flex-col items-center justify-center bg-white shadow-md border px-2 py-1 w-[140px] min-h-[40px]">
                <span className="text-xs font-medium text-center break-words whitespace-normal">
                  {node.name}
                </span>
                <div className="mt-1">
                  <Input
                    type="number"
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleInputChange(node.name, e.target.value)
                    }}
                    className="w-24 h-6 text-xs text-center"
                  />
                </div>
              </Card>
              
              {hasChildren && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleExpand(node.path)
                  }}
                  className="p-0 w-6 h-6 absolute -right-7 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-sm border"
                >
                  {expandedNodes[node.path] ? <Minus size={14} /> : <Plus size={14} />}
                </Button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 
"use client"

import * as React from "react"
import { ModelConfig } from "../financialmodel/types/config/ModelConfig"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

// These constants are used as baseline values for the layout algorithm.
const BASE_NODE_WIDTH = 140
const BASE_NODE_HEIGHT = 40
const H_SPACING = 180 // Horizontal spacing between parent and child nodes
const V_SPACING = 40  // Vertical spacing between sibling nodes
const BUTTON_SIZE = 24 // Size of expand/collapse button

// Layout info for each node
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

interface DecisionTreeProps {
  root: ModelConfig
}

export function DecisionTree({ root }: DecisionTreeProps) {
  // Track expanded nodes via a key (the "path") – if not expanded, treat as leaf.
  const [expandedNodes, setExpandedNodes] = React.useState<{ [key: string]: boolean }>({})

  const toggleExpand = (path: string) => {
    setExpandedNodes((prev) => ({ ...prev, [path]: !prev[path] }))
  }

  // Compute the tree layout based on which nodes are expanded.
  const layout = React.useMemo(() => {
    const positions: TreePosition[] = []
    let idCounter = 0

    // Recursively count leaves. If node is collapsed, it is treated as a leaf.
    function getSubtreeLeafCount(node: ModelConfig, path: string): number {
      if (!node.children || node.children.length === 0 || !expandedNodes[path]) {
        return 1
      }
      return node.children.reduce((sum, child, index) => {
        const childPath = `${path}-${index}`
        return sum + getSubtreeLeafCount(child, childPath)
      }, 0)
    }

    // Recursively assign positions to nodes.
    function layoutSubtree(
      node: ModelConfig,
      depth: number,
      top: number,
      bottom: number,
      path: string,
      parent?: TreePosition
    ) {
    //   const subtreeLeafCount = getSubtreeLeafCount(node, path)
      // Center this node vertically within its allocated block.
      const centerY = (top + bottom) / 2

      const currentId = idCounter++
      const currentNode: TreePosition = {
        id: currentId,
        name: node.name,
        x: depth * H_SPACING,
        y: centerY,
        path,
        model: node,
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
          // Allocate vertical space for the child subtree.
          const childBlockHeight = count * (BASE_NODE_HEIGHT + V_SPACING) - V_SPACING
          const childTop = accumulated
          const childBottom = accumulated + childBlockHeight
          layoutSubtree(child, depth + 1, childTop, childBottom, childPath, currentNode)
          accumulated = childBottom + V_SPACING
        })
      }
    }

    // Calculate overall height from the total leaves.
    const totalLeaves = getSubtreeLeafCount(root, "0")
    const totalHeight = totalLeaves * (BASE_NODE_HEIGHT + V_SPACING) - V_SPACING

    // Begin layout from depth 0 within the vertical range [0, totalHeight].
    layoutSubtree(root, 0, 0, totalHeight, "0")

    return positions
  }, [root, expandedNodes])

  const maxX = Math.max(...layout.map((pos) => pos.x))
  const maxY = Math.max(...layout.map((pos) => pos.y))
  const containerWidth = maxX + BASE_NODE_WIDTH + 50
  const containerHeight = maxY + BASE_NODE_HEIGHT + 50

  return (
    <div
      className="relative overflow-auto border rounded p-4"
      style={{ width: "100%", height: "80vh" }}
    >
      {/* Draw connector lines */}
      <svg
        className="absolute top-0 left-0"
        width={containerWidth}
        height={containerHeight}
        style={{ pointerEvents: "none" }}
      >
        {layout.map((node) => {
          if (node.parentId !== undefined) {
            // Connect from parent's button to child's left side
            return (
              <line
                key={`edge-${node.id}`}
                x1={node.parentX! + BASE_NODE_WIDTH + BUTTON_SIZE/2} // Right side of button
                y1={node.parentY! + BASE_NODE_HEIGHT / 2}
                x2={node.x} // Left side of node
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
      {layout.map((node) => (
        <div key={node.id} className="absolute" style={{ left: node.x, top: node.y }}>
          <Card
            className="flex items-center justify-center bg-white shadow-md border px-2 py-1 w-[140px] min-h-[40px]"
            style={{ height: "auto" }}
          >
            <span className="text-xs font-medium text-center break-words whitespace-normal">
              {node.name}
            </span>
          </Card>
          
          {node.model.children && node.model.children.length > 0 && (
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
      ))}
    </div>
  )
}

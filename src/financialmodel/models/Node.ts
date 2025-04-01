import _ from "lodash";

export class Node {
  cashflows: number[];
  length: number;
  name: string;
  description: string;
  parents: Node[];
  needUpdate: boolean;
  isLeaf: boolean;
  children: Node[];
  dependencies: Node[];
  dependents: Node[];
  result: number;
  nodeType: "cashflow" | "result";

  constructor(
    cashflows: number[] = [],
    name: string = "",
    description: string = "",
    parents: Node[] = [],
    needUpdate: boolean = false,
    isLeaf: boolean = false,
    length: number,
    type: "cashflow" | "result" = "cashflow",
    result: number = 0
  ) {
    if (cashflows.length != 0 && cashflows.length != length) {
      throw new Error("Length is not correct input");
    }
    if (cashflows.length == 0) {
      this.cashflows = _.fill(Array(length), 0);
    } else {
      this.cashflows = cashflows;
    }
    this.name = name;
    this.description = description;
    this.children = [];
    this.parents = parents;
    this.dependencies = [];
    this.dependents = [];
    this.isLeaf = isLeaf;
    this.nodeType = type;
    if (isLeaf) {
      this.needUpdate = false;
    } else {
      this.needUpdate = needUpdate;
    }
    this.length = length;
    this.result = result;
  }

  setToUpdate() {
    this.needUpdate = true;
    if (this.parents.length == 0) {
      return;
    }
    this.parents.map((node) => {
      node.setToUpdate();
    });
  }

  addChild(child_node: Node) {
    if (child_node.length > this.length) {
      throw new Error("Child node length cannot be greater than parent node length");
    }
    this.children.push(child_node);
    child_node.parents.push(this);
    this.setToUpdate();
  }

  addChildren(childen_nodes: Node[]) {
    childen_nodes.map((child) => {
      if (child.length > this.length) throw new Error("Child node length cannot be greater than parent node length");

      this.children.push(child);
      child.parents.push(this);
    });
    this.setToUpdate();
  }

  updateCashflow(cashflows: number[]) {
    if (cashflows.length == 0 || cashflows.length != this.length) throw new Error("Length is not correct input");

    this.cashflows = cashflows;
    this.setToUpdate();
  }

  calculate() {
    if (this.isLeaf) return;

    this.children.map((child) => {
      child.calculate();
    });

    if (this.needUpdate) {
      // Reset the cashflows array
      this.cashflows = _.fill(Array(this.length), 0);

      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.children.length; j++) {
          // Only add if the child has a value at this index
          if (i < this.children[j].length) {
            this.cashflows[i] += this.children[j].cashflows[i];
          }
        }
      }
      this.needUpdate = false;
    }
  }

  findNodeByName(name: string): Node | null {
    if (this.name === name) {
      return this;
    }
    for (const child of this.children) {
      const foundNode = child.findNodeByName(name);
      if (foundNode) {
        return foundNode;
      }
    }
    return null;
  }

  getAllLeaves(): Node[] {
    const leaves: Node[] = [];
    if (this.isLeaf) leaves.push(this);
    this.children.map((child) => {
      leaves.push(...child.getAllLeaves());
    });

    return leaves;
  }

  traversal(callback: (node: Node) => void): void {
    callback(this); // Process the current node
    for (const child of this.children) {
      child.traversal(callback);
    }
  }

  addDependencies(dependencies: Node[]) {
    this.dependencies.push(...dependencies);
    dependencies.forEach((dependency) => dependency.dependents.push(this));
  }

  addDependents(dependents: Node[]) {
    this.dependents.push(...dependents);
    dependents.forEach((dependent) => dependent.dependencies.push(this));
  }
}

// Python recursive traversal of tree
// def treeSum(root):
//   if root is None:
//     return 0
//   else:
//     leftSum = treeSum(root.left)
//     rightSum = treeSum(root.right)
//     return root.data + leftSum + rightSum

class Node {
  constructor(leaf, gridRefX, gridRefY) {
    this.leaf = leaf;
    this.gridRefs = {
      x: gridRefX,
      y: gridRefY,
    };
    this.left = null;
    this.right = null;
  }
}

let root = new Node(false, 0, 0);

let count = 0;

function leafCount(currentNode, limit = 2, x = 0, y = 0) {
  // console.log("iteration... :", currentNode, limit, x, y);
  if (x === limit && y === limit) {
    currentNode.leaf = true;
    currentNode.gridRefs.x = 2;
    currentNode.gridRefs.y = 2;
    count++;
    return;
  }
  if (y < limit) {
    let newLeftNode = new Node(false, x, y + 1);
    currentNode.left = newLeftNode;
    leafCount(newLeftNode, limit, x, y + 1);
  }
  if (x < limit) {
    let newRightNode = new Node(false, x + 1, y);
    currentNode.right = newRightNode;
    leafCount(newRightNode, limit, x + 1, y);
  }
}

leafCount(root, 20);

// console.dir(root, { depth: null });
console.log(count);

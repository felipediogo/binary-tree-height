const data = require('./data');

const calculateHeight = (root) => {
  let leftNode, rightNode;
  leftNode = root.data.left;
  rightNode = root.data.right;

  const calculateMaxLeft = (counter, node) => {
    if (node && node.left) return (calculateMaxLeft(counter++, node.left));
    return counter;
  }

  const calculateMaxRight = (counter, node) => {
    if (node && node.data && node.right) return (calculateMaxRight(++counter, node.right));
    return counter;
  }

  const leftMaxLeft =

  return calculateMaxLeft(1, leftNode) + '-' + calculateMaxRight(1, rightNode);
};

console.log(calculateHeight(data));

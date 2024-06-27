import { sortArray } from './sortarray.js';
import { Node } from './node.js';

export function Tree(array) {
  const buildTree = (arr = array) => {
    const sortedArray = sortArray(arr);
    return createTree(sortedArray, 0, sortedArray.length - 1);
  };

  const createTree = (arr, start, end) => {
    if (start > end) {
      return null;
    }
    const middle = Math.floor((start + end) / 2);
    const node = new Node(arr[middle]);
    node.left = createTree(arr, start, middle - 1);
    node.right = createTree(arr, middle + 1, end);
    return node;
  };

  let root = buildTree();

  const displayRoot = () => root;

  const insert = (value, tree = root) => {
    if (value < tree.data) {
      if (tree.left === null) {
        tree.left = new Node(value);
        return;
      } else {
        insert(value, tree.left);
      }
    } else if (value > tree.data) {
      if (tree.right === null) {
        tree.right = new Node(value);
        return;
      } else {
        insert(value, tree.right);
      }
    }
  };

  const deleteItem = (value, tree = root) => {
    if (tree.data === value) {
      if (tree.left === null && tree.right === null) {
        return null;
      }
      if (tree.left === null) {
        return tree.right;
      }
      if (tree.right === null) {
        return tree.left;
      }
      let node = tree.right;
      while (node.left !== null) {
        node = node.left;
      }
      const replacementNode = node;
      deleteItem(replacementNode.data);
      replacementNode.left = tree.left;
      replacementNode.right = tree.right;
      if (tree === root) {
        root = replacementNode;
      }
      return replacementNode;
    } else if (value < tree.data) {
      if (tree.left === null) {
        throw Error("This value isn't in the tree.");
      }
      tree.left = deleteItem(value, tree.left);
      return tree;
    } else if (value > tree.data) {
      if (tree.right === null) {
        throw Error("This value isn't in the tree.");
      }
      tree.right = deleteItem(value, tree.right);
      return tree;
    }
    return root;
  };

  const find = (value, tree = root) => {
    if (!tree) {
      return false;
    }
    if (tree.data === value) {
      return tree;
    }
    if (value < tree.data) {
      return find(value, tree.left);
    } else if (value > tree.data) {
      return find(value, tree.right);
    }
  };

  const levelOrder = (callback) => {
    let tree = root;
    const queue = [];
    const array = [];
    queue.push(tree);
    while (tree) {
      if (tree.left) queue.push(tree.left);
      if (tree.right) queue.push(tree.right);
      if (callback) {
        callback(queue[0]);
        queue.shift(0);
        tree = queue[0];
      } else {
        array.push(tree.data);
        queue.shift(0);
        tree = queue[0];
      }
    }
    if (!callback) {
      return array;
    }
  };

  const inOrder = (callback, tree = root, array = []) => {
    if (tree === null) {
      return false;
    }
    if (tree.left) inOrder(callback, tree.left, array);
    callback ? callback(tree) : array.push(tree.data);
    if (tree.right) inOrder(callback, tree.right, array);
    if (!callback) {
      return array;
    }
  };

  const preOrder = (callback, tree = root, array = []) => {
    if (tree === null) {
      return false;
    }
    callback ? callback(tree) : array.push(tree.data);
    if (tree.left) preOrder(callback, tree.left, array);
    if (tree.right) preOrder(callback, tree.right, array);
    if (!callback) {
      return array;
    }
  };

  const postOrder = (callback, tree = root, array = []) => {
    if (tree === null) {
      return false;
    }
    if (tree.left) postOrder(callback, tree.left, array);
    if (tree.right) postOrder(callback, tree.right, array);
    callback ? callback(tree) : array.push(tree.data);
    if (!callback) {
      return array;
    }
  };

  const height = (node) => {
    if ((node.left === null) & (node.right === null)) {
      return 0;
    }
    let leftHeight = 0;
    let rightHeight = 0;
    if (node.left) leftHeight = 1 + height(node.left);
    if (node.right) rightHeight = 1 + height(node.right);
    if (leftHeight < rightHeight) {
      return rightHeight;
    }
    return leftHeight;
  };

  return {
    displayRoot,
    insert,
    deleteItem,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
  };
}

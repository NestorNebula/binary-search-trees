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

  return {
    root,
    insert,
    deleteItem,
  };
}

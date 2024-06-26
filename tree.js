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

  return {
    root,
    insert,
  };
}

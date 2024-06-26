import { sortArray } from './sortarray.js';

export function Tree(array) {
  const sortedArray = sortArray(array);

  return { sortedArray };
}

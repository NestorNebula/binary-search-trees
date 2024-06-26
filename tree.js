import { mergeSort } from './mergesort.js';

export function Tree(array) {
  const sortedArray = mergeSort(array);

  return { sortedArray };
}

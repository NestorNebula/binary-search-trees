import { mergeSort } from './mergesort.js';

export function sortArray(array) {
  const arrayWithoutDuplicates = [];
  array.forEach((num) => {
    if (!arrayWithoutDuplicates.includes(num)) {
      arrayWithoutDuplicates.push(num);
    }
  });
  return mergeSort(arrayWithoutDuplicates);
}

export function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const len = array.length;
    const leftArr = mergeSort(array.slice(0, len / 2));
    const rightArr = mergeSort(array.slice(len / 2, len));

    const newArr = [];
    while (leftArr.length !== 0 || rightArr.length !== 0) {
      if (leftArr.length === 0) newArr.push(rightArr.shift());
      else if (rightArr.length === 0) newArr.push(leftArr.shift());
      else if (leftArr[0] <= rightArr[0]) newArr.push(leftArr.shift());
      else newArr.push(rightArr.shift());
    }
    return newArr;
  }
}

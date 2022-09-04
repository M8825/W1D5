function quickSort(array) {
  if (array.length <= 1) return array

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    pivot > array[i] ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([123, 1, 32, 78, 88, 90]));
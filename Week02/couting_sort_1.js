function countingSort(arr) {
  let newArr = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] += 1;
  }

  return newArr;
}

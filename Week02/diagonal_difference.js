function diagonalDifference(arr) {
  let d1 = 0;
  let d2 = 0;
  let cont = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][i];
    d2 += arr[i][cont];
    cont--;
  }

  return Math.abs(d1 - d2);
}

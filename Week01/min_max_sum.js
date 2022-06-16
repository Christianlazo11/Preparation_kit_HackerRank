function miniMaxSum(arr) {
  let max = 0;
  let min = 0;

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      max += arr[i];
    }
    if (i !== arr.length - 1) {
      min += arr[i];
    }
  }

  console.log(min + " " + max);
}

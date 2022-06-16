function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let cero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      cero += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else if (arr[i] > 0) {
      pos += 1;
    }
  }

  pos = (pos / arr.length).toFixed(6);
  neg = (neg / arr.length).toFixed(6);
  cero = (cero / arr.length).toFixed(6);

  console.log(pos);
  console.log(neg);
  console.log(cero);
}

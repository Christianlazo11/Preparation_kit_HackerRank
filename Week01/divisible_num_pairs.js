function divisibleSumPairs(n, k, ar) {
  //la `n` no sirve pa na
  let cont = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) cont++;
    }
  }

  return cont;
}

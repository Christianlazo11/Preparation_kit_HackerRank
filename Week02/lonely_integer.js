function lonelyinteger(a) {
  let cont = 0;
  let num;
  for (let i = 0; i < a.length; i++) {
    cont = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) cont++;
    }

    if (cont === 1) {
      num = a[i];
      break;
    }
  }

  return num;
}

function matchingStrings(strings, queries) {
  let arrData = [];

  for (let i = 0; i < queries.length; i++) {
    arrData.push(0);
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        arrData[i] += 1;
      }
    }
  }

  return arrData;
}

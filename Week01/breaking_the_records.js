function breakingRecords(scores) {
  let minimum = 0;
  let maximum = 0;
  let min = 0;
  let max = 0;

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      minimum = scores[i];
      maximum = scores[i];
    } else {
      if (scores[i] > maximum) {
        max++;
        maximum = scores[i];
      } else if (scores[i] < minimum) {
        min++;
        minimum = scores[i];
      }
    }
  }

  return [max, min];
}

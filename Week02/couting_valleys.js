function countingValleys(steps, path) {
  let cont = 0;
  let valleys = 0;
  let n = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") cont++;
    if (path[i] === "D") cont--;
    if (cont < 0) n++;
    if (cont === 0 && path[i + 1] !== "U" && n >= 1) valleys++;
  }

  return valleys;
}

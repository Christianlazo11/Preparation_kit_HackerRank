function pangrams(s) {
  s = s.toUpperCase();
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
      if (arr.indexOf(s[i]) === -1) {
        arr.push(s[i]);
      }
    }
  }

  if (arr.length === 26) return "pangram";
  return "not pangram";
}

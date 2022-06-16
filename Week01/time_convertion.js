function timeConversion(s) {
  let hours = s.slice(0, 2);
  let min = s.slice(3, 5);
  let seg = s.slice(6, 8);
  let timeFormat = s.slice(s.length - 2, s.length);
  let retorno = "";

  if (timeFormat === "AM") {
    if (hours === "12") {
      retorno = "00" + ":" + min + ":" + seg;
    } else {
      retorno = hours + ":" + min + ":" + seg;
    }
  } else if (timeFormat === "PM") {
    if (hours === "12") {
      retorno = hours + ":" + min + ":" + seg;
    } else {
      hours = parseInt(hours) + 12;
      retorno = hours + ":" + min + ":" + seg;
    }
  }

  return retorno;
}

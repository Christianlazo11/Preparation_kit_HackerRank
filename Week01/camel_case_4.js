function processData(input) {
  let newText = input.split("\r\n");
  let outText = [];

  for (let i = 0; i < newText.length; i++) {
    let case1 = "";
    let case2 = "";
    let word = newText[i].slice(4, newText[i].length);

    for (let j = 0; j < newText[i].length; j++) {
      if (newText[i][j] === ";") {
        if (case1 === "") {
          case1 = newText[i][j - 1];
        } else {
          case2 = newText[i][j - 1];
        }
      }
    }
    let data = getDataWord(case1, case2, word);
    outText.push(data);
  }

  outText.forEach((e) => console.log(e.trim()));
  // console.log(newText);
}

function getDataWord(case1, case2, word) {
  let newWord = "";
  let wordReturn = "";

  if (case1 === "S") {
    switch (case2) {
      case "M":
        newWord = word.slice(0, word.length - 2);
        for (let i = 0; i < newWord.length; i++) {
          if (isUpper(newWord[i])) {
            wordReturn += " " + newWord[i].toLowerCase();
          } else {
            wordReturn += newWord[i];
          }
        }
        break;
      case "C":
        for (let i = 0; i < word.length; i++) {
          if (isUpper(word[i])) {
            wordReturn += " " + word[i].toLowerCase();
          } else {
            wordReturn += word[i];
          }
        }
        break;
      case "V":
        for (let i = 0; i < word.length; i++) {
          if (isUpper(word[i])) {
            wordReturn += " " + word[i].toLowerCase();
          } else {
            wordReturn += word[i];
          }
        }
        break;
    }
  } else if (case1 === "C") {
    switch (case2) {
      case "M":
        for (let i = 0; i < word.length; i++) {
          if (word[i] !== " ") {
            if (word[i - 1] === " ") {
              wordReturn += word[i].toUpperCase();
            } else {
              wordReturn += word[i];
            }
          }
        }
        wordReturn += "()";
        break;
      case "C":
        for (let i = 0; i < word.length; i++) {
          if (i === 0) {
            wordReturn += word[i].toUpperCase();
          } else {
            if (word[i] !== " ") {
              if (word[i - 1] === " ") {
                wordReturn += word[i].toUpperCase();
              } else {
                wordReturn += word[i];
              }
            }
          }
        }
        break;
      case "V":
        for (let i = 0; i < word.length; i++) {
          if (word[i] !== " ") {
            if (word[i - 1] === " ") {
              wordReturn += word[i].toUpperCase();
            } else {
              wordReturn += word[i];
            }
          }
        }
        break;
    }
  }

  return wordReturn.trim();
}
function isUpper(letter) {
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
}

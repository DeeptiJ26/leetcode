const romanObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) ||
      (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) ||
      (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M"))
    ) {
      num = num + romanObj[s[i + 1]] - romanObj[s[i]];
      i++;
      continue;
    } else {
      num = num + romanObj[s[i]];
    }
  }
  return num;
};

var romanToIntDiscussionVersion = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
};

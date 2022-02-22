exports.find = function (str) {
  let fg = undefined;
  if (isNaN(str)) {
    if (str.substring) {
      let cs = "🍪";
      if (str.includes(cs)) {
        fg = true;
      } else {
        fg = false;
      }
    }
  }
  return fg;
};

exports.count = function (str) {
  let yc = undefined;
  if (isNaN(str)) {
    if (str.substring) {
      let dk = "🍪";
      if (str.includes(dk)) {
        //yc of cookies
        let gz = str.length;
        let i = 0;
        let n = 0;
        let x = 0;
        while (i < gz) {
          i++;
          if (str[i] === dk) {
            n = n + 1;
          }
        }
      } else {
        yc = 0;
      }
    }
  }
  return yc;
};

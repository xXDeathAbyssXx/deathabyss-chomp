exports.find = function (str) {
  const emojiRegex = /\p{Emoji}/u;
  let fg = undefined;
  if (str) {
    if (isNaN(str)) {
      if (str.substring) {
        if (str.match(emojiRegex)) {
          let cs = "🍪";
          if (str.includes(cs)) {
            fg = true;
          } else {
            fg = false;
          }
        }
      }
    }
  }
  return fg;
};

exports.count = function (str) {
  const emojiRegex = /\p{Emoji}/u;
  let cookieRegex = /🍪/g;
  let yc = undefined;
  if (str) {
    if (isNaN(str)) {
      if (str.substring) {
        if (str.match(emojiRegex)) {
          let dk = "🍪";
          if (str.includes(dk)) {
            let gz = str.length;
            let i = 0;
            let n = 0;
            while (i < gz) {
              s = str.split("");
              c = [];
              c[0] = s[i] + s[1];
              let ib = c[0].codePointAt(0).toString(16);
              if (ib === "1f36a" || ib === "d83c") {
                n = n + 1;
              }
              i++;
            }
            yc = n;
          } else {
            yc = 0;
          }
        }
      }
    }
  }
  return yc;
};

exports.generate = function (number) {
  let za = undefined;
  if (number) {
    if (!isNaN(number)) {
      if (!number.substring) {
        if (number > 1000) {
          throw new RangeError("You cannot generate more than 1000 cookies");
        }
        let a = [];
        let i = 0;
        while (i < number) {
          let c = a.push(`🍪`);
          i++;
        }
        za = a;
      }
    }
  }
  return za;
};

exports.give = function (from, to, number) {
  const emojiRegex = /\p{Emoji}/u;
  let fg = undefined;
  if (number) {
    if (!isNaN(number)) {
      if (!number.substring) {
        if (number > 1000) {
          throw new RangeError("You cannot give more than 1000 cookies");
        }
        if (from) {
          if (isNaN(from)) {
            if (from.substring) {
              if (to) {
                if (isNaN(to)) {
                  if (to.substring) {
                    if (number < 2) {
                      fg = `${from} gave ${number} cookie to ${to}`;
                    } else if (number > 1) {
                      fg = `${from} gave ${number} cookies to ${to}`;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return fg;
};

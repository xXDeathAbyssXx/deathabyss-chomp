exports.find = function (str) {
  const emojiRegex = /\p{Emoji}/u;
  let fg = undefined;
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

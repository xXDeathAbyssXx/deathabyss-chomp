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
  if (isNaN(str)) {
    if (str.substring) {
      if (str.match(emojiRegex)) {
        let dk = "🍪";
        if (str.includes(dk)) {
          let gz = str.length;
          let i = 0;
          let n = 0;
          while (i < gz) {
            if (str[i].match(cookieRegex)) {
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
  return yc;
};

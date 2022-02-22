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

exports.find = function (string) {
  let test = undefined;
  if (isNaN(string)) {
    if (string.substring) {
      test = true;
    }
    return test;
  }
};

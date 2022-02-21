function find(string) {
  let test = undefined;
  if (isNaN(string)) {
    if (string.substring) {
      test = true;
    }
    return test;
  }
}

module.exports = find;

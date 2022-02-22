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
  let oa = undefined;
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
                      oa = `${from} gave ${number} cookie to ${to}`;
                    } else if (number > 1) {
                      oa = `${from} gave ${number} cookies to ${to}`;
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
  return oa;
};
exports.stats = function (str) {
  const emojiRegex = /\p{Emoji}/u;
  let us = undefined;
  if (str) {
    if (isNaN(str)) {
      if (str.substring) {
        if (str.match(emojiRegex)) {
          let cs = "🍪";
          if (str.includes(cs)) {
            function rx(brands) {
              return brands[Math.floor(Math.random() * brands.length)];
            }
            let brands = [
              "Gullón",
              "Reglero",
              "Fontaneda",
              "Chips",
              "Cuétara",
              "Oreo",
              "Daelmans",
              "Macarons de Pauline",
              "Royal Dansk",
            ];
            let sizes = ["small", "medium", "big"];
            let states = ["complete", "broken"];
            let type = rx(brands);
            let size = rx(sizes);
            let state = rx(states);
            let ch = Math.floor(Math.random() * 100) + 1;
            if (ch < 5) {
              size = "Legendary";
            }
            us = [
              {
                type: type,
                size: size,
                state: state,
              },
            ];
          } else {
            us = false;
          }
        }
      }
    }
  }
  return us;
};
exports.funfact = function () {
  function go(facts) {
    return facts[Math.floor(Math.random() * facts.length)];
  }
  let facts = [
    "The cookies that the Cookie Monster enjoys on Sesame Street are actually painted rice cakes.",
    "Chocolate chip cookies were invented in the 1930s by Ruth Wakefield, who ran the Toll House Inn with her husband.",
    "On that note: Have you noticed chocolate chips never melt? That's because they have less cocoa butter than chocolate bars.",
    'Nabisco "uncaged" the animals on its Animal Crackers box cover after receiving criticism from PETA.',
    "The world's biggest chocolate chip cookie weighed over 40,000 pounds.",
    'The word "cookie" comes from the Dutch "koekje", meaning little cake.',
    "Fortune cookies are not served in China. They are mostly an American phenomenon.",
    "As of 2017, Oreos are America's top-selling cookie brand.",
    "In 2002, Bruce Willis bought 12,000 Girl Scout cookies from his daughter and shipped them troops stationed in the Middle East.",
    "Girl Scout cookies used to cost just 25 to 35 cents per dozen",
    "Oreos are knock-offs of Hydrox biscuits, which predate Oreos by four years.",
    'English women used to eat gingerbread "husbands" to improve their chances of finding a real mate.',
    "The ancestors of what we now call cookies seem to have originated in the 7th century CE in Persia, one of the first places to grow sugarcane.",
    "Famous Amos cookies were born when the founder Wally Amos, an agent, began using them to recruit celebrities to his agency.",
    "Former Secretary of State John Kerry helped open a cookie shop in 1976, when he was bored with the predictable and boring nature of his legal profession.",
  ];
  let funfacts = go(facts);
  let zp = `${funfacts}`;
  return zp;
};

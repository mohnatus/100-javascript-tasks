const handleStr = str => {
  if (!str || typeof str === "object") return false;
  return "" + str;
}

const sentenceCase = str => {
  str = handleStr(str);
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const wordCase = str => {
  str = handleStr(str);
  if (!str) return "";
  return str.split(" ").map(word => sentenceCase(word)).join(" ");
};

const alternateCase = str => {
  str = handleStr(str);
  if (!str) return "";
  return str.split("")
    .map((char, i) => i % 2 ? char.toLowerCase() : char.toUpperCase())
    .join("");
}

module.exports = { 
  sentence: sentenceCase,
  word: wordCase,
  alternate: alternateCase
};
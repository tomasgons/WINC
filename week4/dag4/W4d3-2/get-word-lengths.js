// const addOne = array => {
//   const output = array.map(x => x + 1);
//   return output;
//   // Schrijf hier de functie...
// };

// module.exports = addOne;

const getWordLengths = someWords => {
  const output = someWords.map(x => x.length);
  return output;
};

module.exports = getWordLengths;

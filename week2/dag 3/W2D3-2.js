const addTheWordCool = (array) => {
  array.push("cool");
  return array;
  // add your code
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

const amountOfElementsInArray = (array) => {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"])); // 3

const selectBelgiumFromBenelux = (array) => {
  return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"
// OF (let op: shift muteert de originele array)
const selectBelgiumFromBeneluxShift = (array) => {
  return array.shift();
};
console.log(
  selectBelgiumFromBeneluxShift(["Belgie", "Nederland", "Luxemburg"])
);

const lastElementInArray = (array) => {
  return array[array.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  return array.slice(0, 3);
};
const impeachTrumpSplice = function (array) {
  return array.splice(0, 1);
};
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents);

const stringsTogether = (array) => {
  return array.join(" ");
};
console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

const combineArrays = (Array1, Array2, Array3) => {
  return Array1.concat(Array3);
};
console.log(combineArrays([1, 2, 3], [4, 5, 6], [2, 5]));
// resultaat: [1,2,3,4,5,6]

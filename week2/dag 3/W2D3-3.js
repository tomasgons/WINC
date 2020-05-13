const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie
const findSpiderMan = (superheroesToBeFiltered) => {
  return superheroesToBeFiltered.find(function (superhero) {
    return superhero.name === "Spiderman";
  });
};

// result should be [2, 4, 6]
console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}
const doubleArrayValuesArrow = function (array) {
  return array.map((number) => {
    return number * 2;
  });
};
console.log(doubleArrayValuesArrow([1, 2, 3]));

const containsNumberBiggerThan10 = (array) => {
  return array.some((number) => {
    return number < 9;
  });
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

function isItalyInTheGreat7(array) {
  return array.includes("Italy");
}

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true
const array = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

// dit is een constante met daarin de methode
// const bigSum = array.reduce((total, amount) => total + amount);
// // dan log je dus bigSum zonder ()
// console.log(bigSum);
// dit is een fucntie met daarin de methode, dan log je dus bigSum(array)
const bigSum = (array) => {
  return array.reduce((total, amount) => {
    return total + amount;
  });
};
console.log(bigSum(array));
const superHN = superHeroes.map(naam) => superHeroes.naam;
console.log(superHN);
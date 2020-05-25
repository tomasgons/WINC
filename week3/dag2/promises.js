// /*
// Exercise 1:
// Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
// */

// const testNum = num => {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve(num + " is greater than 10");
//     } else {
//       reject(num + " is less than 10");
//     }
//   });
// };

// testNum(9)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// testNum(11)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//   const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
// const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = new Promise((resolve, reject) => {
  if (array.every(typeof word === string)) {
    resolve(words.makeAllCaps);
  } else {
    const noWords = new Error("not all words");
    reject(noWords);
  }
});
const vraagAanSinterklaas = () => {
  krijgIkEenNieuweiPhone
    .then(function (resolved) {
      // yay, je hebt een nieuwe smartphone
      console.log(resolved);
    })
    .catch(function (error) {
      // oeps, geen Sinterklaas cadeau dit jaar
      console.log(error.message);
    });
};

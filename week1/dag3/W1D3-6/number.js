let name = prompt("What's your name?");
alert(`Welcome ${name} !`);

let min = prompt("Choose the lowest number to guess");
let max = prompt("Chooss the highest number to guess");
alert(`Let's play!`);

let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let randomNumber = getRandomIntInclusive(min, max);
let turns = 5;

let results = () => {
  while (turns > 0) {
    turns--;
    let inputNum = prompt("Guess a number");
    if (parseInt(inputNum) != randomNumber && turns > 0) {
      alert("Wroong! You have only " + turns + " tries left. Try again");
    } else if (parseInt(inputNum) == randomNumber) {
      turns = 0;
      alert("Bam! Winning! ");
      alert(`Bye ${name}. See you!`);
      break;
    }
    if (turns == 0) {
      alert("no more  tries, game over");
      alert(`Bye ${name}. See you!`);
      break;
    }
  }
};
results();
// function getResults() {
//   results();
// }

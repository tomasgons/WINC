// Multiplication tables
let multiplier = 9;
for (let i = 0; i <= 10; i++) {
  let result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}

for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
}

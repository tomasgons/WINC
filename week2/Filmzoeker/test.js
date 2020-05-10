let ages = data
  .filter((animal) => {
    return animal.type === "dog";
  })
  .map((animal) => {
    return animal.age * 7;
  })
  .reduce((sum, animal) => {
    return sum + animal.age;
  });
// ages = 84

let isDog = (animal) => {
  return animal.type === "dog";
};

let dogYears = (animal) => {
  return animal.age * 7;
};

let sum = (sum, animal) => {
  return sum + animal;
};

let ages = data.filter(isDog).map(dogYears).reduce(sum);
// ages

const titleList = movies.map((movie) => {
  return movie.Title;
});

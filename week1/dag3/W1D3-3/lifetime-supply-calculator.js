const lifeSupply = function(age, dailyAmount) {
  let lifeSupply = dailyAmount * 365 * age;

  console.log(
    "You will need " +
      lifeSupply +
      " to last you until the ripe old age of " +
      age
  );
};

lifeSupply("80", "5");
lifeSupply("101", "2");
lifeSupply("75", "20");

const list = document.querySelector(".regionlist");
// countries
const addcountriesDom = randomPersonData => {
  return uniqueregions.forEach(region => {
    let newLi = document.createElement("li");
    newLi.innerHTML = region;
    list.appendChild(newLi);
  });
};
let regions = randomPersonData.map(person => person.region).sort();
let uniqueregions = regions.filter(
  (region, index) => regions.indexOf(region) === index
);

const filterSteenbokVrouwenOuderDanDertig = person => {
  let geboorteDatum = new Date(person.birthday.mdy);
  let steenbok =
    (geboorteDatum.getMonth() === 11 && geboorteDatum.getDate() >= 22) ||
    (geboorteDatum.getMonth() === 0 && geboorteDatum.getDate() <= 19);
  return person.gender === "female" && person.age > 30 && steenbok;
};

let females = randomPersonData.filter(person => {
  return filterSteenbokVrouwenOuderDanDertig(person);
});
console.log(females);
const femaleList = document.querySelector(".femalelist");
// countries
const addFemales = () => {
  females.forEach(female => {
    list.innerHTML += `<li>
      Name: ${female.name}<br>
      Age: ${female.age}<br>
      Date of birth: ${female.birthday.dmy}<br>
      </li><br>`;
  });
};
let expdate = person.creditcard.expiration;
console.log(expdate);

const creditcardFilter = person => {
  let expdate = person.creditcard.expiration;
  let expiringcc =
    (expdate.getFullYear() >= getFullYear() + 1)(
      geboorteDatum.getMonth() === 11 && geboorteDatum.getDate() >= 22
    ) ||
    (geboorteDatum.getMonth() === 0 && geboorteDatum.getDate() <= 19);
  return person.gender === "female" && person.age >= 18 && cc;
};
console.log(expiringcc);

// buttons
document.querySelectorAll("input").forEach(btn => {
  btn.addEventListener("change", event => {
    list.innerHTML = "";
    switch (event.target.value) {
      case "females":
        addFemales();
        break;
      case "landen":
        addcountriesDom();
        break;
      case "landen":
        addccs();
        break;
    }
  });
});

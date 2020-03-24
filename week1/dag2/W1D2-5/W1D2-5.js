let myAge = 21;
if (myAge >= 18) {
  console.log("Welkom binnen!");
} else {
  console.log("Helaas ben je nog te jong voor de kroeg.");
}
let isFemale = true;

if (isFemale) {
  console.log("Welkom!");
} else {
  console.log("Helaas ben je n jongetje, andere keer");
}

let driverStatus = "Kees";

if (driverStatus === "Bob") {
  console.log("Goede reis!");
} else {
  console.log("We bellen een taxi voor je");
}

if (myAge >= 18 && myAge < 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Helaas ben je nog te jong voor de kroeg.");
}

let guestName = "Bram";

if (guestName === "Sarah" || guestName === "Bram") {
  console.log("Je krijgt een gratis biertje!");
} else {
  console.log("Geen gratis bier voor je");
}

let totalAmount = 100;
if (totalAmount >= 25 && totalAmount < 50) {
  console.log("Je krijgt een portie gratis bitterballen!");
}
if (totalAmount >= 50 && totalAmount < 100) {
  console.log("Je krijgt een portie gratis nacho's!");
}
if (totalAmount >= 100) {
  console.log("Je krijgt een fles champagne!");
} else {
  console.log("Helaas pindakaas.");
}

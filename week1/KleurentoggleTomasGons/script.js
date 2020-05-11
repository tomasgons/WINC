// hamburgermenu
const burgerMenu = document.querySelector(".burger");
const wrapMenu = document.querySelector(".wrapper");
const grootMenu = document.querySelector(".menu");
const bodyColor = document.querySelector("body");
const menuLinks = document.querySelectorAll("input");
const backgroundText = document.querySelector("#colortext");

// dit maakt eventlisteners vast aan de button en zegt wat ze moeten doen

document.querySelectorAll("input").forEach((Btn) => {
  Btn.addEventListener("click", () => {
    bodyColor.className = Btn.id;
    backgroundText.innerHTML = Btn.id;
  });
});
// verander classname van menu-onderdelen
menuLinks.forEach(function (Btn) {
  Btn.className = Btn.id;
});

const toggleGrootMenu1 = function () {
  burgerMenu.addEventListener("click", function () {
    grootMenu.classList.toggle("expanded");
    menuLinks.style.visibility = "visible";
  });
};
toggleGrootMenu1();

const hideMenu = function () {
  grootMenu.addEventListener("click", function () {
    grootMenu.classList.remove("expanded");
    menuLinks.style.visibility = "hidden";
  });
};
hideMenu();

// hiermee verandert de kleur op basis van toetsenbord
window.addEventListener("keydown", function (e) {
  if (e.code == "Digit1" || e.code == "Numpad1") {
    bodyColor.className = "grey";
    backgroundText.innerHTML = bodyColor.className;
  } else if (e.code == "Digit2" || e.code == "Numpad2") {
    bodyColor.className = "red";
    backgroundText.innerHTML = bodyColor.className;
  } else if (e.code == "Digit3" || e.code == "Numpad3") {
    bodyColor.className = "blue";
    backgroundText.innerHTML = bodyColor.className;
  } else if (e.code == "Digit4" || e.code == "Numpad4") {
    bodyColor.className = "green";
    backgroundText.innerHTML = bodyColor.className;
  } else if (e.code == "Digit5" || e.code == "Numpad5") {
    bodyColor.className = "yellow";
    backgroundText.innerHTML = bodyColor.className;
  } else if (e.code == "Digit6" || e.code == "Numpad6") {
    bodyColor.className = "purple";
    backgroundText.innerHTML = bodyColor.className;
  }
});

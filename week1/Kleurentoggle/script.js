// hamburgermenu
const burgerMenu = document.querySelector(".burger");

const wrapMenu = document.querySelector(".wrapper");
const grootMenu = document.querySelector(".menu");

const bodyColor = document.querySelector("body");

const menuLinks = document.querySelectorAll("input");

// dit maakt eventlsnts vast aan de button en zegt wat ze moeten doen

document.querySelectorAll("input").forEach((Btn) => {
  Btn.addEventListener("click", () => {
    // console.log(Btn.innerHTML);

    bodyColor.className = Btn.id;
  });
});

// verander classname van menu-onderdelen

menuLinks.forEach(function (Btn) {
  Btn.className = Btn.id;
});

// toggle menu
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

// hiermee veranderd=t de kleur op basis van toetsenbord

window.addEventListener("keydown", function (e) {
  if (e.code == "Digit1" || e.code == "Numpad1") {
    bodyColor.className = "grey";
  } else if (e.code == "Digit2" || e.code == "Numpad2") {
    bodyColor.className = "red";
  } else if (e.code == "Digit3" || e.code == "Numpad3") {
    bodyColor.className = "blue";
  } else if (e.code == "Digit4" || e.code == "Numpad4") {
    bodyColor.className = "green";
  } else if (e.code == "Digit5" || e.code == "Numpad5") {
    bodyColor.className = "yellow";
  } else if (e.code == "Digit6" || e.code == "Numpad6") {
    bodyColor.className = "purple";
  }
});

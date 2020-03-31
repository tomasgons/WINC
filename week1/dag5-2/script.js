// hamburgermenu
const burgerMenu = document.querySelector(".burger");
const wrapMenu = document.querySelector(".wrapper");
const grootMenu = document.querySelector(".menu");
// waarom werkt queryselector wel maar getelemntsbytag niet?
const bodyColor = document.querySelector("body");

// dit klopt ook
// const menuLinks = document.getElementsByTagName("li");
// for (i = 0; i < menuLinks.length; i++) {
//   menuLinks[i].className = "color-" + i;
// }

menuLinks.forEach(function(item, index) {
  item.className = "color-" + index;
});

const menuLinks = document.querySelectorAll("li");

const menuHome = document.querySelector(".color-0");
const menuRed = document.querySelector(".color-1");
const menuBlue = document.querySelector(".color-2");
const menuGreen = document.querySelector(".color-3");
const menuYellow = document.querySelector(".color-4");
const menuPurple = document.querySelector(".color-5");
const menuOrangee = document.querySelector(".color-6");
// // hieronder het uitgeklapte menu met lijst

// functies
const toggleGrootMenu = function() {
  grootMenu.classList.toggle("menu2");
};

// onderstaande klopt

const newLi = document.createElement("li");
const menuOrange = document
  .getElementsByClassName("menu2")
  .getElementbyTagName("ul")[0];

menu.appendChild(newLI);

const changeBackGround0 = function() {
  bodyColor.className = "color-0";
};
const changeBackGround1 = function() {
  bodyColor.className = "color-1";
};

const changeBackGround2 = function() {
  bodyColor.className = "color-2";
};

const changeBackGround3 = function() {
  bodyColor.className = "color-3";
};

const changeBackGround4 = function() {
  bodyColor.className = "color-4";
};

const changeBackGround5 = function() {
  bodyColor.className = "color-5";
};

wrapMenu.addEventListener("mouseover", toggleGrootMenu);
wrapMenu.addEventListener("mouseout", toggleGrootMenu);

menuHome.addEventListener("click", changeBackGround0);
menuRed.addEventListener("click", changeBackGround1);
menuBlue.addEventListener("click", changeBackGround2);
menuGreen.addEventListener("click", changeBackGround3);
menuYellow.addEventListener("click", changeBackGround4);
menuPurple.addEventListener("click", changeBackGround5);

document.addEventListener("keyup", changeBackGround0);
menuRed.addEventListener("click", changeBackGround1);
menuBlue.addEventListener("click", changeBackGround2);
menuGreen.addEventListener("click", changeBackGround3);
menuYellow.addEventListener("click", changeBackGround4);
menuPurple.addEventListener("click", changeBackGround5);

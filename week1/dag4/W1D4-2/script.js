// prevent default behaviour

const alertButton = document.querySelector("#mybutton");

alertButton.addEventListener("click", () => {
  alert("Button Clicked");
});
// vanaf hier backgroundchange

const bodycolor = document.querySelector("body");

const changebtn = document.querySelector("#mybutton2");
changebtn.addEventListener("click", () => {
  bodycolor.classList.toggle("redbackground");
});
console.log(bodycolor);

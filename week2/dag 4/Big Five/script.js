document.querySelectorAll(".big-five-button").forEach((Btn) => {
  Btn.addEventListener("click", () => {
    // console.log(Btn.innerHTML);

    const newLi = document.createElement("li");

    newLi.innerHTML = Btn.innerHTML;

    const ul = document.querySelector("#spotted-animals-list");

    ul.appendChild(newLi);
  });
});

const removeFirstBtn = document.querySelector("#remove-first-item-button");
const parent = document.querySelector("#spotted-animals-list");
const child = parent.querySelector(".spotted-animals-list-item");

removeFirstBtn.addEventListener("click", () => {
  //  parent.removeChild(child);
  parent.removeChild(parent.childNodes[1]);
});
// remove all

const removeAllBtn = document.querySelector("#remove-all-button");
removeAllBtn.addEventListener("click", function () {
  parent.querySelectorAll("*").forEach((n) => n.remove());
  // console.log('works')
});

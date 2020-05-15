// selectors

const addAnimal = (event) => {
  //   console.log(addAnimal("Lion"));
  const newAnimal = event.target.innerHTML;
  const newItem = documemt.createElement("li");
  listItem.appendChild(document.createTextNode(spottedAnimal));
  const list = document.querySelector("#spotted-animals-list");
  list.appendChild(newItem);
};
// const animalSpotted = event => {
//     // console.log("spotted:", event.target.textContent);
//     const spottedAnimal = event.target.textContent;
//     const listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(spottedAnimal));
//     const list = document.getElementById("spotted-animals-list");
//     list.appendChild(listItem);
//   };

// listeners
document.addEventListener("DOMContentLoaded", function () {
  const animalButtons = document.querySelectorAll(".big-five-button");
  animalButtons.forEach(function (animalButton) {
    animalButton.addEventListener("click", addAnimal);
  });
  const removeFirstItemButton = document.getElementById(
    "remove-first-item-button"
  );
  removeFirstItemButton.addEventListener("click", removeFirstItem);

  const removeAllButton = document.getElementById("remove-all-button");
  removeAllButton.addEventListener("click", removeAll);
});

const addMoviestoDom = () =>
  movies.map((movie) => {
    const ul = document.querySelector("#mainlist");
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += "<img src =" + movie.Poster + " />";
  });
addMoviestoDom();

// const titleList = movies.map((movie) => {
//   return movie.Title;
// });
// console.log(titleList);

const filterMovies = () => {
  movies
    .map((movie) => {
      return movie.Title;
    })
    .filter((movie) => {
      return movie.includes(wordinMovieTitle);
    });
};

filterMovies();
console.log(filterMovies("Avengers"));

// document.querySelectorAll("input").forEach((btn) => {
//   btn.addEventListener("change", (event) => {
//     filterMovies(event.target);

//     switch (event.target.value) {
//       case "avengers":
//         filterMovies();
//         break;
//       case "x-men":
//         console.log("hey ik ben xmen film");
//         break;
//       case "princess":
//         console.log("hey ik ben princess film");
//         break;

//       case "batman":
//         console.log("hey ik ben batman film");
//         break;
//       case "newmovies":
//         console.log("hey ik ben een nieuwe film");
//         break;
//     }
//   });
// });

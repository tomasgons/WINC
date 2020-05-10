// const addMoviestoDom = movies.map((movie) => {
//   const ul = document.querySelector("#mainlist");
//   let li = document.createElement("li");
//   ul.appendChild(li);
//   li.innerHTML += "<img src =" + movie.Poster + " />";
// });

const addMoviestoDom = () => {
  movies.map((movie) => {
    const ul = document.querySelector("#mainlist");
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += "<img src =" + movie.Poster + " />";
  });
};
addMoviestoDom();
console.log(addMoviestoDom);

const filterMovies = () =>
  movies
    .map((movie) => {
      return movie.Title;
    })
    .filter((wordinMovieTitle) => {
      return movies.includes(wordinMovieTitle);
    });
filterMovies("X-Men");
console.log(filterMovies);

const filterMovies = function (wordInsideMovieTitle) {
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.includes(wordInsideMovieTitle);
  });
  addMoviesToDom(filteredMovies);
};

//     // movieList.forEach((film) => {});
//     // const titleList = movies.map((film) => {
//     //   return film.Title;
//     // });

//     // // // console.log(avengerList);
//     // // const filterMovies = titleList.filter(wordInMovieTitle => {
//     // //   return wordInMovieTitle === "Avengers";
//     // // });
//     // let filterMovies = movieList.filter((Title) => Title.includes("Avengers"));
//     // return film.Poster;
//     // console.log(filterMovies);

//     // ul = document.createElement("ul");

//     // document.getElementById("main-nav").appendChild(ul);

//     // movieList.forEach(function (Poster) {
//     //   let li = document.createElement("li");
//     //   ul.appendChild(li);

//     //   li.innerHTML += "<img src =" + Poster + " />";
//     // });
//     // // eventlistener voor elke button, klopt! switch moet dus In de functie!!
// document.querySelectorAll(".buttons");

document.querySelectorAll("input").forEach((btn) => {
  btn.addEventListener("change", handleOnChangeEvent(event))
})
  
  (event) => {
    switch (event.target.value) {
      case "avengers":
        break;
      case "x-men":
        console.log("hey ik ben xmen film");
        break;
      case "princess":
        console.log("hey ik ben princess film");
        break;

      case "batman":
        console.log("hey ik ben batman film");
        break;
      case "newmovies":
        console.log("hey ik ben een nieuwe film");
        break;
    }
  });
});

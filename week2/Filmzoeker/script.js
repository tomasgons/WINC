const newLi = document.createElement("li");
const newUl = document.querySelector("#mainlist");
const newA = document.createElement("a");

const addMoviestoDom = (array) => {
  return array.map((movie) => {
    return (newUl.innerHTML +=
      "<li>" +
      "<a href= " +
      '"http://www.imdb.com/title/' +
      movie.imdbID +
      '"' +
      'target="_blank"' +
      ">" +
      "<img src =" +
      movie.Poster +
      "/></li>");
  });
};
addMoviestoDom(movies);

const filterMovies = (wordinMovie) => {
  return movies.filter((o) =>
    Object.keys(o).some((k) =>
      o[k].toLowerCase().includes(wordinMovie.toLowerCase())
    )
  );
};

searchBar = document.querySelector("#searchbar");

// searchBar.addEventListener("key-up", (event) =>  {
//      event.target.value.toLowerCase()
//       switch (event.target.value) {

// filter op jaar
const newMovies = movies.filter((movie) => {
  return movie.Year >= 2014;
});
// console.log(newMovies);

// haalt alle li's weg voordat de nieuwe gefilterde films er in gezet worden
document.querySelectorAll("input").forEach((btn) => {
  btn.addEventListener("click", () => {
    newUl.querySelectorAll("*").forEach((newLi) => newLi.remove());
  });
});

document.querySelectorAll("input").forEach((btn) => {
  btn.addEventListener("change", (event) => {
    switch (event.target.value) {
      case "avengers":
        addMoviestoDom(filterMovies("avengers"));

        break;
      case "x-men":
        addMoviestoDom(filterMovies("x-men"));
        break;
      case "princess":
        addMoviestoDom(filterMovies("princess"));
        break;

      case "batman":
        addMoviestoDom(filterMovies("batman"));
        break;
      case "newmovies":
        addMoviestoDom(newMovies);
        break;
    }
  });
});

searchBar.addEventListener("keydown", () => {
  newUl.querySelectorAll("*").forEach((newLi) => newLi.remove());
});

searchBar.addEventListener("key-up", (event) => {
  switch (event.target.value.toLowerCase) {
    case "avengers":
      addMoviestoDom(filterMovies("avengers"));

      break;
    case "x-men":
      addMoviestoDom(filterMovies("x-men"));
      break;
    case "princess":
      addMoviestoDom(filterMovies("princess"));
      break;

    case "batman":
      addMoviestoDom(filterMovies("batman"));
      break;
    case "newmovies":
      addMoviestoDom(newMovies);
      break;
  }
});

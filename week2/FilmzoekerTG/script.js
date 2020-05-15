const list = document.querySelector("#mainlist");
const searchBar = document.querySelector("#searchbar");

const addMoviestoDom = movies => {
  return movies.forEach(movie => {
    let newLi = document.createElement("li");
    list.appendChild(newLi);
    let newA = document.createElement("a");
    newA.href = "http://www.imdb.com/title/" + movie.imdbID;
    newA.target = "_blank";
    newLi.appendChild(newA);
    moviePic = document.createElement("img");
    moviePic.src = movie.Poster;
    newA.appendChild(moviePic);
  });
};
addMoviestoDom(movies);

// filter movies on word in title
const filterMovies = wordinMovie => {
  return movies.filter(movie =>
    Object.keys(movie).some(Title =>
      movie[Title].toLowerCase().includes(wordinMovie)
    )
  );
};

// filter new movies
const newMovies = movies => {
  return movies.filter(movie => {
    return movie.Year >= 2014;
  });
};
// filter random film
const randomMovie = movies => {
  return movies.sort(() => 0.5 - Math.random()).slice(0, 1);
  // console.log(randomMovie);
};

// removes all movies before adding new ones
document.querySelectorAll("input").forEach(btn => {
  btn.addEventListener("change", () => {
    list.querySelectorAll("*").forEach(newLi => newLi.remove());
  });
});

// switch statement for buttons
document.querySelectorAll("input").forEach(btn => {
  btn.addEventListener("change", event => {
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
      case "random":
        addMoviestoDom(randomMovie(movies));
        break;
      case "newmovies":
        addMoviestoDom(newMovies(movies));
        break;
    }
  });
});

// turns input text to lowercase
// searchBar.addEventListener("input", e => {
//   e.target.value = e.target.value.toLowerCase();
// });

// switch statement for textinputfield
searchBar.addEventListener("in", event => {
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

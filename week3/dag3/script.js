const getMovieGenres = async function () {
  const data = await getData();
  const list = document.querySelector(".movielist");
  return data.genres.forEach(genre => {
    let newLi = document.createElement("li");
    newLi.innerHTML = `genrenaam: ${genre.name}, ${genre.id}`;
    list.appendChild(newLi);
  });
};

getMovieGenres();

const getFaveMovie = async () => {
  const movie = await getFave();
  const favemov = document.querySelector("#fav");
  let newFave = document.createElement("p");
  newFave.innerHTML = `${movie.original_title}`;
  favemov.appendChild(newFave);
};
getFaveMovie();

const getbestmovies = async () => {
  const toprated = await getTopRated();
  const list2 = document.querySelector(".toplist");
  return toprated.results.forEach(result => {
    let topList = document.createElement("li");
    topList.innerHTML = `Moviename ${result.title}`;
    list2.appendChild(topList);
  });
};
getbestmovies();


"request_token": "df26266959f01caa84f375154315aa3a9eb6c2f6"
06ca4baf92e58eba80783e8564c496100f574d83
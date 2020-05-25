const API_KEY = "63435fa3e71f329f52a2f59414bf8768";

const getData = async function () {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getData function: ", res);
    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
};

const getFave = async function () {
  const apiUrl2 = `https://api.themoviedb.org/3/movie/301528?api_key=${API_KEY}&language=en-US`;
  try {
    const res2 = await fetch(apiUrl2, { method: "GET" });
    console.log("The response from the API in getFave function: ", res2);
    const movie = await res2.json();
    console.log("The data in getFave function ", movie);
    return movie;
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
};

const getTopRated = async function () {
  const apiUrl3 = `https://api.themoviedb.org/3/discover/movie?api_key=63435fa3e71f329f52a2f59414bf8768&primary_release_year=1975`;
  try {
    const res3 = await fetch(apiUrl3, { method: "GET" });
    console.log("The response from the API in getTopRated function: ", res3);
    const toprated = await res3.json();
    console.log("The data in getToprated function ", toprated);
    return toprated;
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
};

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
async function getMovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  console.log(respData);
  const main = document.querySelector("main");

  respData.results.forEach((movie) => {
    const { backdrop_path, title, vote_average } = movie;
    const movieE1 = document.createElement("div");
    movieE1.classList.add("movie");

    movieE1.innerHTML = `
        <img
          src="${IMGPATH + backdrop_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span>${vote_average}</span>
        </div>
        `;
    main.appendChild(movieE1);
  });

  return respData;
}
getMovies();

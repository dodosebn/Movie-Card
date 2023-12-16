// const url = "https://www.omdbapi.com/?t={}".format("movie_name")+"&apikey=xxxxxxxx"
const apiKey = "53a2a380";
const movie = "Batman";
const url2 = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
const image = document.querySelector(".image");
const movieYear = document.querySelector(".movie-year");
const movieName = document.querySelector(".movie-name");
const movieGenre = document.querySelector(".movie-Genre");
const movieActors = document.querySelector(".movie-actors");
const movieAbout = document.querySelector(".movie-about");
const movieType = document.querySelector(".movie-type");
const movieWriter = document.querySelector(".movie-writer");
const movieRating = document.querySelector(".movie-rating");
const movieVoting = document.querySelector(".movie-imdbVotes");
const searchBtn = document.getElementById("search-button");
const imgSearch = document.getElementById("search-input");
const url3 = `'https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0'`;
console.log(url3);

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});

const fetchData = async () => {
  let movie_title = imgSearch.value;
  console.log(movie_title);
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movie_title}`)
    .then((response) => response.json())
    .then((data) => {
      const {
        Poster,
        Title,
        Actors,
        Plot,
        Type,
        Genre,
        Year,
        Writer,
        imdbRating,
        imdbVotes,
        Runtime,
      } = data;
      (image.src = Poster),
        (movieName.innerHTML = Title),
        (movieActors.innerHTML = Actors),
        (movieAbout.innerHTML = Plot),
        (movieType.innerHTML = Type),
        (movieGenre.innerHTML = Genre),
        (movieYear.innerHTML = Year),
        (movieWriter.innerHTML = Writer),
        (movieRating.innerHTML = imdbRating),
        (movieVoting.innerHTML = imdbVotes),
        console.log(data);
    })
    .catch((error) => console.error(error));
};

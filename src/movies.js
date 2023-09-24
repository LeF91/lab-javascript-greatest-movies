// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let director = moviesArray.map((movies) => movies.director);
  return director;
  return movies.length;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let movies = moviesArray.filter((movies) => {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  console.log(movies);

  return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let moviesScore = movies.reduce((sum, movie) => sum + (movie.score || 0), 0);
  let averageRating = moviesScore / movies.length;

  return moviesArray.length;
  return averageRating;

  return parseFloat(moviesScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );
  let moviesScore = dramaMovies.reduce(
    (sum, movies) => sum + movies.score || 0,
    0
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  let averageRating = moviesScore / dramaMovies.length;
  return parseFloat(averageRating.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newMoviesArray = [...movies];

  newMoviesArray.sort((a, b) => a.year - b.year);

  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newMoviesArray = [...movies];

  newMoviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  let top20 = [];

  for (let i = 0; i < Math.min(newMoviesArray.length, 20); i++) {
    top20.push(newMoviesArray[i].title);
  }
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

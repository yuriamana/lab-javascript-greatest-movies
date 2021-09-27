// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => {
    return movie.director;
  })
  return allDirectors;
}
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  // on extrait la liste des drama de steven
  const filteredMovie = movies.filter(movie => 
    movie.director === "Steven Spielberg" 
    && movie.genre.includes('Drama')); 
    // on a la liste 
    // sa longueur repond a la question
    return filteredMovie.length;
  }    
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  
  // s'il n'y a pas de film
  if (movies.length === 0) {
    return 0;
   }
   
   // on se limite aux films avec score
    const moviesWithScore = movies.filter (movie => 
      Object.keys(movie).includes('score') 
    )

// on calcule average des films avec score
    const scoreAv = moviesWithScore.reduce((acc, cv) => {
      return acc + cv.score
    },0)
    return Math.round(scoreAv*100/movies.length)/100;
  } 

// Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(movies) {
  // s'il n'y a pas de film
  if (movies.length === 0) {
    return 0;
   }
   
   // on se limite aux films avec score and drama
    const moviesWithScoreAndDrama = movies.filter (movie => 
      Object.keys(movie).includes('score') && movie.genre.includes('Drama'))

  if (moviesWithScoreAndDrama.length === 0) {
    return 0;
  }
// on calcule average des films avec score and drama retenus
    const scoreAv = moviesWithScoreAndDrama.reduce((acc, cv) => {
      return acc + cv.score
    },0)
    return Math.round(scoreAv*100/moviesWithScoreAndDrama.length)/100;
  } 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const finalOrder = movies.sort((a,b) => {
    return a.year - b.year;
    })
    return finalOrder;
    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
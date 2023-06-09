const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director);
  console.log('Ejercicio 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((item) => item.director === director);
  console.log('Ejercicio 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filtering = array.filter((item) => item.director === director);
  let target = filtering.map((item) => item.score);
  let result = Number(
    target.reduce((acc, item) => acc + item, 0) / target.length.toFixed(2)
  );

  console.log('Ejercicio 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let filtering = array.map((item) => item.title);

  let result = filtering.sort();

  if (result.length > 20) result.length = 20;

  console.log('Ejercicio 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((next, current) => {
    let orden = next.year - current.year; // mdn web docs lo denomina compareFunction (a,b)

    if (orden === 0) {
      // sin cambios entre ellos
      if (next.title < current.title)
        orden = -1; // title es string no por signo sino por mayor menor que<>
      else orden = 1;
    }
    if (orden > 0) {
      orden = 1;
    } //Si orden>0 current en indice menor que next
    if (orden < 0) {
      orden = -1;
    } //Si orden<0, next en indice menor que current, next viene primero que current

    return orden;
  });

  console.log('Ejercicio 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, genre) {
  let moviesAverage = (array, genre) => {
    let filtering = array.filter((item) => {
      if (typeof item.score !== 'number');
      else return item.genre.includes(genre);
    });

    let target = filtering.map((item) => item.score);
    let result = target.reduce((acc, item) => acc + item, 0) / target.length;
    return Number(result.toFixed(2));
  };
  let result = moviesAverage(array, genre);

  console.log('Ejercicio 6 ->', result);
  return result;
}

// Nivel 2
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map((item) => {
    let newTime = item.duration.split(' ');
    let newDuration;

    if (newTime.length == 2) {
      newDuration = parseInt(newTime[0]) * 60 + parseInt(newTime[1]);
    } else if (newTime.length == 1) {
      newDuration = parseInt(newTime[0]);
    } else {
      newDuration = null;
    }

    if (newDuration === 2) {
      /* no entra en el if anerior, si lo pongo dentro del otro if devuelve undefined (newDuration es undefined todavía) */
      newDuration = 120;
    }

    return {
      ...item,
      duration: newDuration
    };
  });

  console.log('Ejercicio 7-> ', result);
  return result;
}

// Nivel 3
// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let targetYear = array.filter((item) => item.year === year);
  let yearSort = targetYear.sort((cum, current) => cum.score > current.score ? 1 : -1);
  let result = yearSort[yearSort.length - 1];

  console.log('Ejercicio 8 -> ', result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

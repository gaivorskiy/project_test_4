"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: {},
    privat: false
};
const a = prompt("Один из просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");
personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;

console.log(personMovieDB);
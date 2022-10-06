const numberOfFilms = +prompt("Сколько фильмов вы уже посмотреои?");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const a = prompt("Один из почледних просмотренных фильмов?", ""),
   b = prompt("На сколько оцените его?", ""),
   c = prompt("Один из почледних просмотренных фильмов?", ""),
   d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);   
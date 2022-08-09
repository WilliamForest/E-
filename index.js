'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 1);

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const firstQuestion = prompt('Один из просмотренных фильмов?', 'терминатор'),
      secondQuestion = prompt('На сколько оцените его?', 10),
      thirdQuestion = prompt('Один из просмотренных фильмов?', 'терминатор'),
      fourQuestion = prompt('На сколько оцените его?', 10);
      
personalMuvieDB.movies[firstQuestion] = secondQuestion; 
personalMuvieDB.movies[thirdQuestion] = fourQuestion;  

console.log(personalMuvieDB);

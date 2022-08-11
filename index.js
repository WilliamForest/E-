'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 1);
    while(numberOfFilms =='' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 1);
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != '' && b != '' && a != null && b != null && a.length < 50){
            personalMovieDB.movies[a] = b; 
            console.log('all done!');
        } else {
            console.log('error, try again!');
                i--;
            }
        }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно давольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30){
        console.log('Вы киноман');
    } else{
        console.log('Перепроверьте значения');
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        let askGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(askGenres);
    }
}
writeYourGenres();
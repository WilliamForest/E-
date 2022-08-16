'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    // },
    // writeYourGenres() {
    //         let getting = prompt(`Введите 3 ваших любимых жанров через запятую`).toLowerCase().Array.from(getting);

    //         if((getting === '' || getting === null) &&  getting.length < 3) {
    //             getting = prompt(`Введите 3 ваших любимых жанров через запятую`).toLowerCase().Array.from(getting);         дописать эту идею
    //         } else {return this.genres.forEach((e, i)=> console.log(`Любимый жанр ${e} - это ${i}`))}
            
    },
    toggleVisibleMyDB(){
       if(this.privat) {
        this.privat = false
    } else {this.privat = true} ;
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(this.privat);
personalMovieDB.writeYourGenres();
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
//Ждет прогрузку DOM - затем выполняет код прописанный в колл-.'r-функции
document.addEventListener('DOMContentLoaded', ()=>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertisement = document.querySelectorAll('.promo__adv'),
          genre = document.querySelector('.promo__genre'),
          posterFont = document.querySelector('.promo__bg'),
          itemsFilms = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
          

addForm.addEventListener('submit', getFilmsInput);

function getFilmsInput(event){
    event.preventDefault();
        
        let newFilm = addInput.value;
    const favotite = checkbox.checked;
   if (newFilm){
    if(newFilm.length > 21){
        newFilm = `${newFilm.slice(0, 21)}...`;
    }
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);
    createListFilms(movieDB.movies, itemsFilms);
   }
    if (favotite) {
        alert('Добавляем любимый фильм');
    }
    event.target.reset();
}

const deleteAdvertisement = (arr)=> {
    arr.forEach(i => i.innerHTML ='');
};

const makeChanges = (textElement, changeImage) =>{
    textElement.innerHTML = 'ДРАММА';
    changeImage.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';
};

function sortArr(arr){
    arr.sort();
}

function createListFilms(films, parent){    
    parent.innerHTML ='';
    sortArr(films);

    films.forEach((el, i) => 
    parent.innerHTML += `
    <li class="promo__interactive-item"> ${i+1} ${el}
      <div class="delete"></div>
    </li>
    `);

    
    document.querySelectorAll('.delete').forEach((basket, i) => {
        basket.addEventListener('click', ()=>{
            basket.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createListFilms(movieDB.movies, itemsFilms);
        });
    });

}

deleteAdvertisement(advertisement);
makeChanges(genre, posterFont);
createListFilms(movieDB.movies, itemsFilms);

});




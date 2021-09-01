const numberOffilms = prompt("Сколько фильмов вы уже посмотрели?", "20");
console.log(numberOffilms);

const personalMovieDB = {
	count: numberOffilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}; 

const a = prompt("Один из последних просмотренных фильмов?", "Один дома");
const b = prompt("Как оцените?", "10");
const c = prompt("Один из последних просмотренных фильмов?", "Один дома 2");
const d = prompt("Как оцените?", "8");


	personalMovieDB.movies[a] = b;
	personalMovieDB.movies[c] = d;

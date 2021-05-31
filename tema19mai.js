//functia callback
let x = function() {
	console.log("I am called from inside a function");	
}

let y = function(callback) {
	console.log("Do something");
	callback();
}
y(x);

//fara callback
//let calc = function(num1, num2, calcType) {
//	if (calcType === 'add') {
//		return num1 + num2;
//	} else if (calcType === 'multiply') {
//		return num1 * num2;
//	}
//}
//console.log(calc(2,3, 'multuply'));
//cu callback scoatem add si multiply afara
let add = function(a,b) {
	return a+b;
}
let multiply = function(a,b) {
	return a*b;
}
let calc = function(num1, num2, callback) {
	return callback(num1, num2);
}
console.log(calc(2,3, multiply));

//arrow function, este scrierea prescurtata a unei functii
//rezultatul e acelasi, doar se scrie altfel
let name = 'Ion'
let myFunction0 = function(name) {
	console.log(name);
}

let myFunction = (name) => {
	console.log(name);
}
myFunction0('Functia pe lung');
myFunction('Functia cu arrow');

//functia primeste 2 parametri si il returneaza pe cel mai mare
console.log(Math.max(4, 10));

const array1 = [2, 4, 6];
console.log(Math.max(...array1)); //de ce aceste 3 puncte?
//recursive function

function calcNumber(initialNumb, finalNumber) {
	let currentNumer = initialNumb;
	currentNumer++;
	console.log(currentNumer);
	return currentNumer;
}
let final = calcNumber(1, 10);
console.log("numarul final = ", final);

let numbers = [2, 5, 3, 8, 7, 1];
function myFunction2() {
	numbers.sort();
}

//infinit
console.log(32564/0);// in cazul cand impartim -nr/0 avem - infinit, 0/0 nan

//nan not a number, de obicei se afiseaza cand o operatie matematica este gresita
console.log(10/'om')

//object number, avem un numar ca string, atunci el este un obiect
let nr = '1';
console.log(typeof nr); //typeof afla ce tip de date avem
console.log(typeof new Number(nr)); //se defineste cifra ca un obiect prin new Number

//reducerea la numar a unui string de genul 100km
console.log(parseInt('100km'));
console.log(parseFloat('25.4mm'));
console.log(parseFloat('256.25.22')); //22 se ignora

//rotunjirea cifrelor Math

console.log(Math.floor(1.2), Math.floor(3.5), Math.floor(6.7)); //rotunjirea spre numarul intreg de jos
console.log(Math.ceil(1.2), Math.ceil(3.5), Math.ceil(6.7)); //rotunjirea spre numarul intreg de sus
console.log(Math.round(1.2), Math.round(3.5), Math.round(6.7)); //rotunjirea spre numarul intreg
console.log(Math.trunc(1.2), Math.trunc(3.5), Math.trunc(6.7)); //respinge cifrele de dupa virgula

//rotunjirea catre un anumit numar de zecimale dupa 0, cu aplicarea la round automata (nu stiu de ce?)
let d = 5.927654
console.log(d.toFixed(2));

//Tema de acasa Funcția preia limitele unui număr aleatoriu (min, max)și iese la consola
let random = Math.floor(Math.random() * 50) + 1;
console.log(random);


function myRandom(min, max) {
	return Math.floor(Math.random() * (max - min +1) + min);
}
console.log(myRandom(50, 100));

//Creati o data noua, afisati luna, anul, ziua, ora
let today = new Date();
console.log(today);

let month = today.getMonth();
let year = today.getFullYear();
let day = today.getDate();
let hour = today.getHours();
let minutes = today.getMinutes();

console.log(month, year, day, hour, minutes);

let may = new Date();
may.setMonth(4);
may.setFullYear(2021);
may.setDate(14);
may.setHours(0);
may.setMinutes(0);
may.setSeconds(0);

console.log('Happy Birthday to me!!! ' + may);
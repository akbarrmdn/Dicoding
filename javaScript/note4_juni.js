let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

let c = 10;
let d = 12;

/* AND operator */
console.log(c < 15 && d > 10); // (true && true) -> true
console.log(c > 15 && d > 10); // (false && true) -> false

/* OR operator */
console.log(c < 15 || d > 10); // (true || true) -> true
console.log(c > 15 || d > 10); // (false || true) -> true

/* NOT operator */
console.log(!(c < 15)); // !(true) -> false
console.log(!(c < 15 && d > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/

let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") {
    greeting = "Good Morning!";
}

console.log(greeting);

/* output
Good Morning!
*/

let language1 = "French";
let greeting1 = "Selamat Pagi"

if(language1 === "English") {
    greeting1 = "Good Morning!";
} else if(language1 === "French") {
    greeting1 = "Bonjour!"
} else if(language1 === "Japanese") {
    greeting1 = "Ohayogozaimasu!"
}

console.log(greeting1);

/* output
Bonjour!
*/
// variabel

var firstName = "Harry";
console.log(firstName);

firstName = "Ron";
console.log(firstName);

/* output: 
Harry
Ron
*/

x = 100;
var x;
console.log(x);

/* output: 100 */

// yang salah
const z = 100;
console.log(z);

z = 200;
console.log(z);
/* TypeError: Assignment to constant variable. */

//yang ga error
let f = 100;     //sengaja gua ganti f ,kalau gua kasih z error dia hiks :"(
console.log(z);

f = 200;
console.log(z);

// Undefined
// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai, dalam arti lain ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, maka variabel tersebut menjadi undefined. Contoh:
let x;
console.log(typeof(x));

/* output: undefined */

// menentukan number/String
let x = 10;
console.log(typeof(x))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

// kabataku
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/ 

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

let greet = "Hello";
console.log(typeof(greet))

/* output: string */

let wahh = "Hello";
let moreGreet = wahh + wahh;
console.log(moreGreet);

/* output: HelloHello */

let x = true;
let d = false;

console.log(typeof(x))
console.log(typeof(d))

/* output: 
boolean
boolean
*/

const w = 10;
const bw = 12;

let isGreater = w > bw;
let isLess = w < bw;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

let x; // x merupakan undefined
x = 1 // sekarang x merupakan number
x = true // sekarang x merupakan boolean
x = "Harry" // sekarang x merupakan string
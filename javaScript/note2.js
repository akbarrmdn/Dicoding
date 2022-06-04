let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Coklat', 42.5, 22, true, 'Programming' ]
*/

let mYArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(mYArray[1]);

/* output:
42.5
*/

let MyArray = ["Coklat", 42.5, 22, true, "Programming" ];
console.log(MyArray[0]);
console.log(MyArray[1]);
console.log(MyArray[2]);
console.log(MyArray[3]);
console.log(MyArray[4]);
console.log(MyArray[5]);
console.log("Panjang nilai myArray adalah " + MyArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

let user2 = {
    name: {
      first: "Harry",
      last: "Potter",
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user2.name.first + " " + user2.name.last);
console.log("Umur saya " + user2.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/
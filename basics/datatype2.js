// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreVaule = 100.99

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);

const bigNumber = 3333333333333333333333n

// reference type or non primitive

// array, objects, functions

const heros = ["abc", "dfg", "yui"];
let myObj = {
    name: "rajal",
    age: 20

}

const myFunction = function(){
    console.log("Hello");
}

//##############################################################################

// Stack memory(primitive use) and heap memory(non-primitive use)

let myname = "rajal"
let anothername = "myname"
anothername = "ronil"

console.log(myname);
console.log(anothername);

// heap

let userone = {
    email: "rajal@gmail.com",
    upi: "rajalxyz"
}
let usertwo = userone

usertwo.email = "ronil@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
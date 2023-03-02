const gameName = new String('rajall-ll')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(5));
//console.log(gameName.indexOf(l));

const newstring = gameName.substring(0, 6)
console.log(newstring);

const string2 = gameName.slice(-8, 4)
console.log(string2);

const string3 = "     rajal       "
console.log(string3);
console.log(string3.trim())

const url = "https://rajal.com/rajal%20thummar"
console.log(url.replace('%20','+'))
console.log(url.includes('rajal'))

console.log(gameName.split('-'));
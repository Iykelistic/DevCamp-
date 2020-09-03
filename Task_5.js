//create a variable to hold the string
let string = "Mr John Smith";

//assign a function to trim the string variable

string = string.trim(" ");

//assign a new variable to hold the replaced string

let newstring = string.replace(/ /g,"%20");

console.log(newstring)
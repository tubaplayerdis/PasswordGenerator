/*
 VARIABLES TO CHANGE RIGHT BELOW


    YOU NEED NODE.JS AND INSTALLED FOR THIS TO WORK 
    YOU NEED A JSON FILE WITH {} in it - a ready to write file comes with the program - if you dont have the {} youll get an error

*/

const PasswordFiles = './Passwords.json'
// dont change this unless you want to write to a custom json file
//Path to .json file /
// ./Passwords.json is a directory that means the json is in the same folder recommend using a specific directory example below
// C:\Users\PublicUser\OneDrive\Documents\Example
// if you cant find a specific directory https://www.youtube.com/watch?v=MVoQhYWJuvw
// put the directory inside the ''

var passwordLength = 12
// change the green number to change the password length

var amountofpasswords = 20
// change the gree number to change the amount of passwords

/* EXTRA INFO 
    Make Sure you are using Node.js 
    Make sure you specify a directory
    dont fuck around with the code unless you want the program to break (Unless your gamer and know javascript)
*/


// =============================================================== REAL CODE BELOW ===========================================================================================





const fs = require("fs");
const crypto = require('crypto')

const generatePassword = (
  
  characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.randomFillSync(new Uint32Array(passwordLength)))
    .map((x) => characters[x % characters.length])
    .join('')


var PasswordJson = [];

for (var i = 0; i<= amountofpasswords; i++){

    var x   = "Password" + i,
        obj = {};

    obj[x] = [generatePassword()];

    PasswordJson.push(obj);

}


const jsonString = JSON.stringify(PasswordJson, null, 2)
console.log(jsonString)


fs.writeFile(PasswordFiles, jsonString, err => {
    if(err) {
        console.log('ERROR WRITING TO FILE', err)
    } else  {
       console.log('uhh this worked somehow') 
    }
})



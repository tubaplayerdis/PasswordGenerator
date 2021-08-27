/*
 VARIABLES TO CHANGE RIGHT BELOW


    YOU NEED NODE.JS AND INSTALLED FOR THIS TO WORK 
    YOU NEED A JSON FILE WITH {} in it - a ready to write file comes with the program - if you dont have the {} youll get an error

*/

const PasswordFiles = require('./Passwords.json')
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





const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const fs = require("fs");

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}




var PasswordJson = [];

for (var i = 0; i<= amountofpasswords; i++){

    var x   = "Password" + i,
        obj = {};

    obj[x] = [generateString(passwordLength)];

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



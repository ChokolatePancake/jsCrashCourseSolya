// alert("Some alert message");
// let price = 123.5;               // number
// let email = 'blabla@ukr.net';    //string
// let isValid = true;              //boolean
// let empty0bj = null;             //null
// let undefinedVar = undefined;    // undefined
//
//
// console.log("Type of price: " + typeof(price))
// console.log("Type of email: " + typeof(email))
// console.log("Type of isValid: " + typeof(isValid))
// console.log("Type of empty: " + typeof(empty0bj))
// console.log("Type of undefined: " + typeof(undefinedVar))


const year = prompt("1.Enter your birth year");
alert(`Your age:${2023 - year}`);



const radius = prompt("2.Input radius");
alert(`Area is: ${3.14 * radius * radius}`)



const dist_time = prompt("3.Input distance in km between towns and time(use \",\")");
let dist = dist_time.split(",")[0];
let time = dist_time.split(",")[1];
alert(`Your speed: ${dist / time}`);


const rate = 0.93;
const dollar = prompt("4.Input dollars");
alert(`You have: ${dollar * rate}`);


const flash_drive = prompt("5.Input capacity of USB flash drive(GB)");
number = flash_drive * 1024 / 840;
alert(`There can be saved ${Math.floor(number)}`);

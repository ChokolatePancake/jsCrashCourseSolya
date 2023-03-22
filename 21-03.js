const conver = 0.621371;
const km = prompt("Input kilometers");
alert(`In miles it is ${km * conver}`);


///////////////////////////////////////////////////////////


const time = prompt("Input current time in XX:XX format");
let hour = time.split(":")[0];
let min = time.split(":")[1];

let hour_til_end = 23 - hour;
let min_til_end = 60 - min;
if(min_til_end == 60) {
    hour_til_end += 1;
    min_til_end = "00";
}
alert(`Time until the end of the day ${hour_til_end}:${min_til_end}`);


////////////////////////////////////////////////////////////////


let number = prompt("Input 3-digit number:");
let one = number % 10;
let ten = (number - one) % 100 / 10;
let hun = (number - (ten * 10) - one) / 100;
let num2 = "" + one + ten + hun;
alert(`Your backwards displayed number: ${num2}`);
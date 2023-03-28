let number = prompt("Input number(1-9)");

switch (parseInt(number)) {
    case 1: alert("!");
        break;
    case 2: alert("@");
        break;
    case 3: alert("#");
        break;
    case 4: alert("^");
        break;
    case 5: alert("?");
        break;
    case 6: alert("`");
        break;
    case 7: alert("/");
        break;
    case 8: alert("+");
        break;
    case 9: alert("&");
        break;
    default: alert("Error");
    break;
}

/////////////////////////////

let year = prompt("Input year: ");
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    alert("It is leap");
} else alert("It isnt leap");

///////////////////////////
//
// let date = prompt("Input date(only day)");
// alert(date <= 30 ? `Tomorrow will be ${parseInt(date) + 1}` : "Tomorrow will be 1");

let date = prompt("Input date(YYYY-MM-DD)");
let dateObj = new Date(date)
dateObj.setDate(dateObj.getDate() + 1)
alert(`Tomorrow will be ${dateObj.toString().slice(4,10)}`);

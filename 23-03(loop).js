let number1 = prompt("Input number and we calculate sum of all previous numbers");

let sum = 0;
if(number1 > 0) {
    for (let num = 1; num <= number1; num++) {
        sum += num;
    }
    alert(`Sum: ${sum}`);
} else alert("Not number or bellow zero");

////////////////////////////////////////////

let number2 = prompt("Input number");
length = number2.length;
alert(`Number of digits: ${length}`);

////////////////////////////////////////////

let positives = 0, negatives = 0, zero = 0, odd = 0;
for(let i10 = 0; i10 < 10; i10++) {
    let number3 = prompt("Input number");

    if(number3 > 0) positives++;
    if(number3 == 0) zero++;
    if(number3 < 0) negatives++;
    if(number3 % 2 != 0) odd++;
}

alert(`Positive numbers: ${positives}\n
Zero numbers: ${zero}\n
Negative numbers: ${negatives}\n
Odd numbers: ${odd}\n
Even numbers: ${10 - odd}`)

///////////////////////////////////////

// Define a function that displays an alert box with a custom message and button
function showAlert(message, buttonText, buttonCallback) {
    // Create the alert box container element
    var alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');

    // Create the message element
    var messageElement = document.createElement('p');
    messageElement.textContent = message;

    // Create the button element
    var buttonElement = document.createElement('button');
    buttonElement.textContent = buttonText;
    buttonElement.addEventListener('click', buttonCallback);

    // Add the message and button elements to the alert box
    alertBox.appendChild(messageElement);
    alertBox.appendChild(buttonElement);

    // Add the alert box to the page
    document.body.appendChild(alertBox);
}
let days = 1;if(close()) {
            break;
        }
let dayName;

    while (true) {
        switch (days) {
            case 1: dayName = "Monday";
            break;
            case 2: dayName = "Tuesday";
            break;
            case 3: dayName = "Wednesday";
            break;
            case 4: dayName = "Thursday";
            break;
            case 5: dayName = "Friday";
            break;
            case 6: dayName = "Saturday";
            break;
            case 7: dayName = "Sunday";
        }



        if(days == 7) days = 0;
        days++;
        let close = confirm(`${dayName}. Do you want to see the next day? Press 'Cancel' to exit.`);
        if(!close) {
            break;
        }
};

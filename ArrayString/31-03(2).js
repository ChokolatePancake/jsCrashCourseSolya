const text = prompt("Enter text:");
let spaces = text.split(" ").length - 1;
alert(`${text} has ${spaces} spaces`);

//////////////////////////////////

let text2 = text.charAt(0).toUpperCase() + text.slice(1);
alert(text2);

///////////////////////////////////////

let words = text.split(" ").length;
alert(`${text} has ${words} words`);

//////////////////////////////////////////

const phrase = prompt("Enter a phrase:");
words = phrase.split(" ");
let abbreviation = "";
for (let i = 0; i < words.length; i++) {
    abbreviation += words[i][0].toUpperCase();
}
alert(`The abbreviation is "${abbreviation}".`);

/////////////////////////////////////

const maybePalindrome = prompt("Input text: ");
let splitString = maybePalindrome.split("");
let reversed = splitString.reverse();
let Palindrome = reversed.join("");

alert(maybePalindrome.toLowerCase() == Palindrome.toLowerCase() ? "It is palindrome" : "It isnt palindrome");

/////////////////////////////////////////////

const fullUrl = prompt("Input url");
let url = fullUrl.split("/");
let protocol = url[0];
let domain = url[2];
let path = url.slice(3).join("/");
alert(`protocol: ${protocol}\ndomain: ${domain}\npath: ${path}`);
let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 100) + 1);
}

//////////////////////

for(let i = 0; i < 20; i++) {
    console.log(`${i+1} - ${array[i]}`);
}

/////////////////////

let descArray = array.sort((a,b) => (a > b ? -1 : 1));
console.log(descArray)

////////////////////

let Duplicates = array => array.filter((item, index) => array.indexOf(item) != index);
let duplicateElements = Duplicates(array);
console.log(`Duplicates: ${duplicateElements}`);

////////////////////////////

console.log("Кратні 7:")

for (let i = 0; i < 20; i++) {
    if (array[i] % 7 == 0)
    console.log(array[i]);
}

///////////////////////

let count = 0;
for (let i = 0; i < 20; i++) {
    if (array[i] % 2 == 0) {
        count++;
    }
}
console.log("Number of even numbers:" + count);

///////////////////////////////

for (let i = (array.length / 2); i < 20; i++) {
    array[i] = 0;
}
console.log(array)

///////////////////

array.splice(0,3);
console.log(array);

//////////////////////////


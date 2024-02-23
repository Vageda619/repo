/*const arr = [1, 5, 4, 10, 0, 3];

for (const el of arr) {
    if (el === 10) {
        console.log(el);
        break;
    }
    console.log(el);
}*/


const arr = [1, 5, 4, 10, 0, 3];
const numberToFind = 4;
const position = arr.indexOf(numberToFind);

if (position !== -1) {
    console.log(`Число ${numberToFind} найдено в массиве на позиции ${position}.`);
} else {
    console.log(`Число ${numberToFind} не найдено в массиве.`);
}


const numbers = [1, 3, 5, 10, 20];
const joinedString = numbers.join(' ');
console.log(joinedString);



/*const arr = [1, 5, 4, 10, 0, 3];

for (const el of arr) {
    if (el === 10) {
        console.log(el);
        break;
    }
    console.log(el);
}


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


const rows = 3;
const cols = 3;
const value = 1;
const multiArray = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(value);
    }
    multiArray.push(row);
}

console.log(multiArray);



let array = [1, 1, 1];
const valuesToAdd = [2, 2, 2];

array.push(...valuesToAdd);

console.log(array);



let array = [9, 8, 7, 'a', 6, 5];

array.sort();

array = array.filter(item => typeof item === 'number');

console.log(array);


const numbers = [9, 8, 7, 6, 5];
const userGuess = prompt("Попробуйте угадать число");

if (numbers.includes(Number(userGuess))) {
    alert("Угадал! 🎉");
} else {
    alert("Не угадал... 😕");
}


const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr);


const arr = [[1, 2, 3], [4, 5, 6]];
const flatArr = arr.flat();

console.log(flatArr);


const array = [2, 5, 8, 3, 7, 1, 4, 6, 9, 10];

for (let i = 0; i < array.length - 1; i++) {
    const currentElement = array[i];
    const nextElement = array[i + 1];
    const sum = currentElement + nextElement;
    
    console.log(`Сумма элементов ${currentElement} и ${nextElement} равна: ${sum}`);
}


function squareNumbers(arr) {
    const squaredArray = arr.map(number => number * number);
    return squaredArray;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);

console.log(squaredNumbers);


function getLengthWords(arr) {
    const lengthsArray = arr.map(word => word.length);
    return lengthsArray;
}

const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const wordLengths = getLengthWords(words);

console.log(wordLengths);
*/


function filterPositive(array) {
    return array.filter(num => num < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

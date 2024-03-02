/*let str = "js";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);


function filterByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

let strings = ["Apple", "Banana", "Orange", "apricot", "Peach"];
let prefix = "Ap";

let filteredArray = filterByPrefix(strings, prefix);
console.log(filteredArray);


let number = 32.58884;

let roundedDown = Math.floor(number);
let roundedUp = Math.ceil(number);
let roundedNearest = Math.round(number);

console.log(`До меньшего целого: ${roundedDown}`);
console.log(`До большего целого: ${roundedUp}`);
console.log(`До ближайшего целого: ${roundedNearest}`);1


let numbers = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log(`Наименьшее число: ${minNumber}`);
console.log(`Наибольшее число: ${maxNumber}`);


function generateRandomNumber(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(generateRandomNumber(1, 10));


function getRandomArrNumbers(limit) {
    const arrayLength = Math.floor(limit / 2);
    const randomNumbers = [];

    for (let i = 0; i < arrayLength; i++) {
        randomNumbers.push(Math.floor(Math.random() * (limit + 1)));
    }

    return randomNumbers;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(5));
console.log(getRandomArrNumbers(13));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(10, 20);
console.log(randomNumber);


const currentDate = new Date();
console.log(currentDate);*/


const currentDate = new Date();
console.log('Текущая дата:', currentDate.toLocaleDateString());

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


function formatDate(date) {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const inputDate = new Date();
const formattedDate = formatDate(inputDate);
console.log(formattedDate);


function startGame() {
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const shuffledWords = words.sort(() => Math.random() - 0.5);

alert(`Перемешанные слова: ${shuffledWords.join(', ')}`);

const firstWord = prompt('Чему равнялся первый элемент массива?');
const lastWord = prompt('Чему равнялся последний элемент массива?');

if (!firstWord.trim() || !lastWord.trim() || !isNaN(firstWord) || !isNaN(lastWord)) {
    alert('Вы ввели неверные значения или ничего не ввели. Попробуйте снова.');
} else if (firstWord === words[0] && lastWord === words[words.length - 1]) {
    alert('Поздравляем! Вы угадали оба элемента!');
} else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
    alert('Вы были близки к победе!');
} else {
    alert('Вы ответили неверно.');
}
}
/*const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 people.sort((a, b) => a.age - b.age);
 
 console.log(people);


 function map(arr, mapFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(mapFunction(arr[i]));
    }
    return result;
}

function filter(arr, ruleFunction) {
    return map(arr, (element) => {
        if (ruleFunction(element)) {
            return element;
        }
    }).filter(Boolean);
}

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 
 console.log(filter(people1, isMale));


 const duration = 30;
const interval = 3;
let counter = 0;

const intervalId = setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate);

    counter += interval;
    if (counter >= duration) {
        clearInterval(intervalId);
        console.log('30 секунд прошло');
    }
}, interval * 1000);


function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})*/


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
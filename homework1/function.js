function findSmallerNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(findSmallerNumber(6,6));
console.log(findSmallerNumber(8,4));


function EvenOrNot(number) {
    if (number % 2 ===0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(EvenOrNot(11));
console.log(EvenOrNot(20));


function printSquare(number) {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
}

printSquare(5);


function calculateSquare(number) {
    return number * number;
}

const result = calculateSquare(5);
console.log(result);


function checkAge() {
    const age = parseInt(prompt('Сколько вам лет?'));
    
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

checkAge();


function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

console.log(multiplyNumbers(5, 10));
console.log(multiplyNumbers("5", 10));
console.log(multiplyNumbers(5, "ggwp"));


function cubeNumber() {
    const input = prompt('Введите число:');
    
    if (isNaN(input)) {
        return 'Переданный параметр не является числом';
    } else {
        const result = input ** 3;
        return `${input} в кубе равняется ${result}`;
    }
}
console.log(cubeNumber());


const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 8,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("Площадь круга circle1:", circle1.getArea());
console.log("Периметр круга circle1:", circle1.getPerimeter());

console.log("Площадь круга circle2:", circle2.getArea());
console.log("Периметр круга circle2:", circle2.getPerimeter());


function getSeason() {
    const MonthInput = prompt('Введите число:');
    const monthNumber = parseInt(MonthInput);

    if (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)) {
        return "Неправильный номер месяца. Введите число от 1 до 12.";
    } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return "Зима";
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return "Весна";
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return "Лето";
    } else {
        return "Осень";
    }
}

function showSeason() {
console.log(getSeason());
}
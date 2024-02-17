function findSmallerNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(findSmallerNumber(6,6));
console.log(findSmallerNumber(8,4));


function evenOrNot(number) {
    if (number % 2 ===0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(evenOrNot(11));
console.log(evenOrNot(20));


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
    const userInput = prompt('Сколько вам лет?');
    
    if (userInput === null || userInput.trim() === '') {
        console.log('Вы не ввели возраст. Пожалуйста, введите ваш возраст.');
    } else {
        const age = Number(userInput);
        
        if (!isNaN(age)) {
            if (age < 0) {
                console.log('Вы ввели отрицательное значение');
            } else if (age >= 0 && age <= 12) {
                console.log('Привет, друг!');
            } else {
                console.log('Добро пожаловать!');
            }
        } else {
            console.log('Вы ввели не число. Пожалуйста, введите число.');
        }
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
    const input = prompt('Введите любое число');
    
    if (input === null || input.trim() === '') {
        console.log('Вы не ввели число, пожалуйста, введите число');
    } else if (isNaN(input)) {
        return 'Переданный параметр не является числом';
    } else {
        const number = Number(input);
        const result = number ** 3;
        return `${number} в кубе равняется ${result}`;
    }
}

console.log(cubeNumber());


function createCircle(radius) {
    return {
      radius: radius,
      getArea: function() {
        return Math.PI * this.radius ** 2;
      },
      getPerimeter: function() {
        return 2 * Math.PI * this.radius;
      }
    };
  }

  const circles = {
    circle1: createCircle(5),
    circle2: createCircle(8),
  };

  Object.keys(circles).forEach(key => {
    const circle = circles[key];
    console.log(`Площадь ${key}:`, circle.getArea());
    console.log(`Периметр ${key}:`, circle.getPerimeter());
  });


  function getSeason() {
    const monthInput = prompt('Введите число:');

    if (!monthInput) {
        return "Вы не ввели число.";
    }

    const monthNumber = Number(monthInput);

    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
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
alert(getSeason());
}
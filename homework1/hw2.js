let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
  alert('Пароль введен верно ');
} else {
  alert('Пароль введен неправильно ');
}

let c = 6;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

let d = 80;
let e = 101;

if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a)+Number(b));


let monthNumber = 8;

if (monthNumber > 12) {
  console.log('Неверный номер месяца, введите число от 1 до 12');
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log('зима');
      break;
      case 3:
      case 4:
      case 5:
      console.log('весна');
      break;
      case 6:
      case 7:
      case 8:
        console.log('лето');
      break;
      case 9:
      case 10:
      case 11:
        console.log('осень');
      break;
      default:
      console.log('неправильный месяц');
      break;
  }
}

let userInput2 = prompt('введите любое число');
let number = parseFloat(userInput2);
if (isNaN(number)) {
  alert('неверный ввод, введите число');
} else {
  if (number % 2 === 0) {
    alert('число четное');
} else {
  alert ("число нечетное");
}
}

let clientOS = prompt('Введите операционную систему: 0 - iOS, 1 - Android');

if (clientOS === '0') {
  console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === '1') {
  console.log('Установите версию приложения для Android по ссылке');
} else {
  console.log('Неправильный ввод операционной системы');
}

let clientOS2 = prompt('Введите операционную систему: 0 - iOS, 1 - Android');
let clientDeviceYear = prompt('Введите год создания устройства:');

if (clientOS2 === '0') {
  if (clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
  } else {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
  }
} else if (clientOS2 === '1') {
  if (clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
  } else {
    console.log('Установите облегченную версию приложения для Android по ссылке');
  }
} else {
  console.log('Неправильный ввод операционной системы');
}
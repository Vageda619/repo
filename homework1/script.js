let a = 10;
alert(a);
a = 20;
alert(a);

const годВыпускаПервогоiPhone = 2007;
console.log(годВыпускаПервогоiPhone);
alert (годВыпускаПервогоiPhone);

const creator = "Brendan Eich";
console.log(creator);
alert(creator);

let b = 10;
let c = 2;
alert("Сумма: " + (b + c));
alert("Разность: " + (b - c));
alert("Произведение: " + (b * c));
alert("Частное: " + (b / c));

let result = Math.pow(2, 5);
alert("Результат: " + result);

let x = 9;
let y = 2;
let remainder = x % y;
alert("Остаток от деления x на y: " + remainder);
//a и b уже заняты, я просто не понял, нужно все задания в разных файлов делать или внутри тега body

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: "Артём Вагин",
    age: 23,
    isAdmin: true
};

// Задание 9.1
user["city of residence"] = "Москва";

// Задание 9.2
user.age = 23;

// Задание 9.3
delete user["city of residence"];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);

let name = prompt("Введите ваше имя:");
alert(`Привет, ${name}!`);
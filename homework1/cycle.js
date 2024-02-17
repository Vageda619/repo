let i=0;
while (i<2) {
    console.log("Привет");
    i++;
}

let number = 1;

while (number <= 5) {
  console.log(number);
  number++;
}

for (let a=7; a<=22; a++) {
    console.log(a);
}

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
  };
  
  for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
  }

  let n=1000;
  let num=0;
  while (n>=50) {
    n/=2;
    num++;
  }
  console.log(`конечное число: ${n}`);
  console.log(`кол-во итераций: ${num}`);

  const firstFriday = 5;
  for(z=1;z<=31;z++) {
    if ((z-1) % 7 === firstFriday - 1){
        console.log(`Сегодня пятница, ${z}-е число. Необходимо подготовить отчет.`);
    }
  }
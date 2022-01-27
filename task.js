let message;
message = "World  JS!";
message = "1. Hello Module 2!" + "<br>" ;

document.write(message);  

let user = "2. Janara" + "<br>" , 
  email = "3. janara.satybaldieva.kk@gmail.com";
  document.write(user  +  email + "<br/>" + "<br/>");

  let souv = prompt("Введите количество сувенира");
let trin = prompt("Введите количество безделушек");
const souvenir = 75;
const trinket = 112;
let genWeight = souv * souvenir + trin * trinket ;
document.write("4.Общий вес посылок:" + genWeight + "грамм <br>");

let firstNum = prompt("Введите целое число а:");
let secondtNum = prompt("Введите целое число b:");
let a = Number(firstNum);
let b = Number(secondtNum);
let s = a + b;
document.write("5. Сумма: " + s + "<br>");
let difference = a - b;
document.write("Разница: " + difference + "<br>");
let multi = a * b;
document.write("Произведение:" + multi + "<br>");
let division = a / b;
document.write("Частное от деления: " + division + "<br>");
let remainder = a % b;
document.write("Остаток от деления: " + remainder + "<br>");
let result = a ** b;
document.write("Результат возведения числа: " + result + "<br>");

"use strict";

// #1 Task

// for (var i = 0; i < 1600; i++) {
//   if (i % 10 === 5) {
//     console.log(i);
//   }
// }

// #2 Task

// var number_one = prompt("შეიყვანეთ რიცხვი , 50-დან 100-მდე");
// var faqt = 1;

// for (var i = 1; i <= parseInt(number_one); i++) {
//   //   console.log(i);
//   faqt *= i;
//   console.log(faqt);
// }

// #4 Task

// var number1 = parseInt(prompt("Number1"));
// var number2 = parseInt(prompt("Number2"));
// var number3 = parseInt(prompt("Number3"));
// var number4 = parseInt(prompt("Number4"));
// var number5 = parseInt(prompt("Number5"));

// if (
//   number1 > number2 &&
//   number1 > number3 &&
//   number1 > number4 &&
//   number1 > number5
// ) {
//   console.log(`number1 is higher`);
// } else if (
//   number2 > number1 &&
//   number2 > number3 &&
//   number2 > number4 &&
//   number2 > number5
// ) {
//   console.log(`number2 is higher`);
// } else if (
//   number3 > number1 &&
//   number3 > number2 &&
//   number3 > number4 &&
//   number3 > number5
// ) {
//   console.log(`number3 is higher`);
// } else if (
//   number4 > number1 &&
//   number4 > number3 &&
//   number4 > number2 &&
//   number4 > number5
// ) {
//   console.log(`number4 is higher`);
// } else {
//   console.log(`number5 is higher`);
// }

// if (
//   number1 < number2 &&
//   number1 < number3 &&
//   number1 < number4 &&
//   number1 < number5
// ) {
//   console.log(`number1 is Lower`);
// } else if (
//   number2 < number1 &&
//   number2 < number3 &&
//   number2 < number4 &&
//   number2 < number5
// ) {
//   console.log(`number2 is Lower`);
// } else if (
//   number3 < number1 &&
//   number3 < number2 &&
//   number3 < number4 &&
//   number3 < number5
// ) {
//   console.log(`number3 is Lower`);
// } else if (
//   number4 < number1 &&
//   number4 < number3 &&
//   number4 < number2 &&
//   number4 < number5
// ) {
//   console.log(`number4 is Lower`);
// } else {
//   console.log(`number5 is Lower`);
// }

// var number_avg = (number1 + number2 + number3 + number4 + number5) / 5;

// console.log(number_avg);

// #5 Task

// var number_one = prompt("შეიყვანეთ რიცხვი 100-დან 200-მდე");
// if (number_one < 100 || number_one > 200) {
//   prompt("შეიყვანეთ რიცხვი 100-დან 200-მდე");
// }

// var number_one = 100;

// for (var i = 0; i < parseInt(number_one); i++) {
//   if (number_one % i === 0) {
//     console.log(i);
//   }
// }

// #6 Task
// var number_one = prompt("შეიყვანეთ რიცხვი");
var number_one = 1;
var amount = 0;
for (var i = 0; i <= parseInt(number_one); i++) {
  if (number_one % i === 0 && number_one % number_one === 0) {
    amount++;
  }
}

if (amount > 2) {
  console.log(`თქვენს მიერ არჩეული რიცხვი ${number_one}-არის და ის შედგენილია`);
} else if (amount === 1) {
  console.log(
    `თქვენს მიერ შეყვანილი რიცხვი არის ${number_one} და ის არც მარტივია და არც შედგენილი`
  );
} else {
  console.log(`თქვენს მიერ არჩეული რიცხვი ${number_one}-არის და ის მარტივია`);
}

console.log(` თქვენს მიერ არჩეულ რიცხვს აქვს ${amount} გამყოფი `);

// #6 Task

// var number_one = prompt("შეიყვანეთ რიცხვი");
// var faqt = 1;

// for (var i = 1; i < parseInt(number_one); i++) {
//   //   faqt *= i;
//   //   console.log(`${faqt} * ${i} = ${(faqt *= i)}`);
//   console.log(`${i} * ${faqt} = ${(faqt *= i)}`);
// }

// #7 Task

// var number_one = 10;
// var number_one = prompt("შეიყვანეთ რიცხვი");

// for (var i = number_one; i <= number_one; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

// #3 Task

// var userNumber = Number(prompt("Enter user number"));
// while (userNumber < 2 || userNumber > 100 || isNaN(userNumber)) {
//   userNumber = Number(prompt("Enter user number"));
// }

// var sum = 0;
// var counter = 0;
// for (var i = 2; i < userNumber; i++) {
//   sum += i;
//   counter++;
// }

// var average = sum / counter;
// console.log("average : ", average);

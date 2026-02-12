Math.abs(-10) // 10 
//  Returns the absolute (positive) value of a number.

Math.ceil(4.2) // 5
// Converts a decimal number to the nearest upper integer.

Math.floor(4.9) // 4
// Converts a decimal number to the nearest lower integer.

Math.round(4.5) // 5
// Rounds a number to the nearest integer (.5 or more goes up).

Math.trunc(4.9) // 4
//Just removes the decimal part.

Math.pow(2, 3) // 8
// Multiplies a number by itself b times.

Math.max(3, 7, 2) // 7
// Gives the biggest number.

Math.min(3, 7, 2) // 2
//Gives the smallest number.


Math.random() // 0.0 to 0.999...
// Gives a random number between 0 and 1.


(5.678).toFixed(2) // "5.68"
// Keeps only n numbers after the decimal.

const prompt = require("prompt-sync")();
//calculate compound interest
let p = prompt("Enter Principle: ");
let r = prompt("Enter rate: ");
let t = prompt("Enter time: ");


console.log((p* Math.pow(1+(r/100),t)-p).toFixed(2))

//otp genrate
console.log(Math.trunc(Math.random()*9000 )+1000)

// area of triangle by hero's formula
// const prompt = require("prompt-sync")();

let a = Number(prompt("Enter side a: "));
let b = Number(prompt("Enter side b: "));
let c = Number(prompt("Enter side c: "));
let s = (a+b+c)/2
console.log(Math.sqrt(s *(s-a)* (s-b) * (s-c)));



//circumference of circle
// const prompt = require("prompt-sync")();

let radius = Number(prompt("Enter radius : "));

let circumference = 2 * Math.PI * radius;

console.log("Circumference ", circumference);
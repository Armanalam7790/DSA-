//js essentials
//difference between let, var , const

//Q1.  sum of 2  interger
let num1  = 10
let num2  = 10
console.log(num1 + num2);

//Q2. relation between integer and string
//string + string  = string (concatenation)
let s1 = "hello"
let s2  = " world"
console.log(typeof(s1 + s2));

//string + int  = string (concatenation)
let st  = "hello "
let num   =  10
console.log(typeof(st + num));

//int + int  = int (arithmatic)
 let temp1   = 20
let temp2   =  10
console.log(typeof(temp1 + temp2));

//Q3. sum and message.

//   --type coercion
//   --greet the user

 console.log("1" + 1); //concatenation

 console.log("1" - 1); //arthimatic

//Q4. Accept and print the answer
 const prompt = require("prompt-sync")()
 let age  = Number(prompt("Enter your age "))
 console.log(`Age : ${age}`);

//Q5. swap 2 variable via 3 methods

let a = 10
let b = 20
console.log(a,b);

let temp ;

temp = a
a = b
b = temp
console.log(a,b);
//without extra variable
// let a = 10
// let b = 20
// console.log(a, b);

// a = a + b
// b = a - b
// a = a - b

// console.log(a, b);

//Destructuring swaping

// let a = 10
// let b = 20
// console.log(a, b);
// [a,b] = [b,a]
// console.log(a, b);
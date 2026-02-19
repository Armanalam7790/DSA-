let prompt  = require("prompt-sync")()

let age  =  Number(prompt('Enter Your Age : '))

if (age>=18) {
    console.log('valid voter');
    
}else  console.log('invalid voter');

let marks  = Number(prompt("enter your marks :"))

if (marks>85 && marks<=95) console.log('Excellent');
else if(marks>80 && marks<=85) console.log('very good');
else if(marks>70 && marks <= 80) console.log('good');
else console.log("fair");

//  Aceept two numbers and prints the greatest between them
    let num1 = Number(prompt("first number :"))
    let num2 = Number(prompt("second number :"))

    if (num1>num2)console.log(`${num1} is greater`);
    else if (num1<num2)console.log(`${num2} is greater`);
    else console.log("Both numbers are equal");

//  Accept name and age from the user check whether it is even number or odd

let n = Number(prompt("enter number : "))
if (n%2==0)console.log('even number');
else console.log('odd number');

//Accept three numbers and print thr greatest among them

// let num1  =  Number(prompt("enter first number"))
// let num2  =  Number(prompt("enter second number"))
// let num3  =  Number(prompt("enter third number"))

// if (num1>=num2 && num1>=num3) console.log('num1 is greatest');
// else if(num2>=num1 && num2>=num3) console.log('num2 is gratest');
// else if (num3>=num1 && num3>=num2) console.log('num3 is greatest');



//Accept a year to check if it a leap year or not 

// let year  = +prompt('Enter leap Year :')
// if (year%4==0  && year % 100 != 0) {
//     console.log("leap year");
    
// } else if(year%400===0) console.log('leap year');
// else console.log('not leap year');



// let amount   = +prompt('enter number : ');
// let paybleAmount  =0
// if (amount>0 && amount<=5000) {
//  paybleAmount = amount
    
// }
// else if(amount>5000 && amount<=7000){
//      paybleAmount = amount -(5*amount)/100

// }

// else if(amount>7000 && amount<=9000){
//      paybleAmount = amount -(10*amount)/100

// }

// else{
//      paybleAmount = amount -(20*amount)/100

// }

// console.log('paypleAmount '  + paybleAmount);




// let amount   = +prompt('enter number : ');
// let dis  = 0

// if (amount>0 && amount<=5000)  dis = 0
// else if(amount>5000 && amount<=7000) dis = 5
// else if(amount>7000 && amount<=9000) dis = 10
// else  dis  = 20



// console.log('paypleAmount '  + (amount -(dis*amount)/100));


// let unit  =  Number(prompt('enter unit '))

// let amount = 0
// if (unit>0 && unit<=100) {
//     console.log(unit*4.2);
    
// }else if(unit>100 && unit<=200){
//     console.log((100*4.2) + (unit - 100)*6);
//     // console.log((100 * 4.2) + (unit - 100) * 6);
    
// } else if(unit>200 && unit<=400){
//   console.log((100*4.2) + (100 * 6) + (unit - 200)*8);   
// } else {
   
//     console.log((100*4.2) + (100 * 6) + (200 * 8) + (unit-400)*13);
// }


//600


// if (unit>400) {
//     amount  = (unit - 400)*13
//     unit = 400
// } 
// if (unit>200 && unit <=400) {
//     amount = amount + (unit-200)*8
//     unit  = 200
// }
// if (unit>100 && unit<=200) {
//     amount = amount + (unit-100)*6
//     unit = 100
// }

// amount = amount + (unit*4.2)
// console.log(amount);

//counting number of days in a given month of a year


let month = Number(prompt("Enter month (1-12): "));
let year = Number(prompt("Enter year: "));
let days;

if (month === 2) {

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        days = 29;
    } else {
        days = 28;
    }

} else if (
    month === 1 || month === 3 || month === 5 ||
    month === 7 || month === 8 || month === 10 ||
    month === 12
) {
    days = 31;

} else if (
    month === 4 || month === 6 ||
    month === 9 || month === 11
) {
    days = 30;

} else {
    console.log("Invalid month");
}

if (days) {
    console.log("Number of days:", days);
}
//  let prompt  = require('prompt-sync')()
// let n  = Number(prompt('Enter a Number : '))


// for (let a = 0; a < n; a++) {
//    console.log('hello world');
   
    
// }.

//  let prompt  = require('prompt-sync')()
//  let n  = Number(prompt('Enter a Number : '))

//  for (let i = n; i >= 0; i--) {
//      console.log(i);
     
//  }

//  let prompt = require('prompt-sync')();

// let n = Number(prompt('Enter a Number : '));

// for (let i = n; i >= 1; i--) {
//   process.stdout.write(i);
// }

// function sumUpToN(n) {
//     let a  = 0
//    for(let i  = 1;  i<=n; i++){
//      a+= i
   
//    }

// console.log(a)
    
// }
// sumUpToN(5)


//  let prompt  = require('prompt-sync')()

// var n  =  +prompt('ENTER A NUMBER : ')


// for (let i = 0; i <= n; i++) {
// console.log(i);

  
// }


// for (let i = n; i >= 1; i--) {
 
//   console.log(i);
  
  
// }


//  let prompt  = require('prompt-sync')()

var n  =  +prompt('Enter A Number : ')



for (let i = 1; i <=10; i++) {
  
    console.log(n*i);
    
    
}

//  let prompt  = require('prompt-sync')()

var n  =  +prompt('Enter A Number : ')

let sum = 0
for (let i = 1; i <=n; i++) {
    sum  = sum+ i
    
}
console.log(sum);

//Q. Accept an integer and Print Hello world
//Q. Print Natural Number Up to n.
//Q. Reverse for Loop Print n to 1
//Q. take a number as input and print its table
//Q. sum up to n terms
//Q. fectorial of a number
//Q. prints the sum of all even & odd numbers in a range seprately
//Q. prints all fectors of a number
//Q. check if the number is prime or not

//  let prompt  = require('prompt-sync')()

var a  =  +prompt('Enter A first number : ')
var b  =  +prompt('Enter A second number : ')
let evenSum = 0
let oddSum = 0   
if (a>b) {
     var temp  = a
     a = b
    b  = temp
}

for (let i = a; i <=b; i++) {
   if (i%2 ===0){
   evenSum =  evenSum+i
   } 

   else oddSum =  oddSum+i
    
}

console.log('evenSum', evenSum);
console.log('oddSum', oddSum);



 let prompt  = require('prompt-sync')()

var n  =  +prompt('Enter A  number : ')

for (let i = 1; i <= n/2; i++) {
   if (n%i ===0) process.stdout.write(Number(i) + ' ')
   
    
}
console.log(n);



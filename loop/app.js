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

function sumUpToN(n) {
    let a  = 0
   for(let i  = 1;  i<=n; i++){
     a+= i
   
   }

console.log(a)
    
}
sumUpToN(5)
// let prompt   = require('prommp-sunc')()
let prompt = require('prompt-sync')();

// let s = prompt("Enter a string: ");
// let vowel  = 0; let consonents  = 0;
// for (let i = 0; i < s.length; i++) {
   
//     let ch  = s.charAt(i)

//     switch (ch) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             vowel++
//             break;
    
//         default:
//             consonents++
//             break;
//     }
    
// }

// console.log('vowel' , vowel);
// console.log('consonents' , consonents);



console.log('Enter 1 for area of rectangle');
console.log('Enter 2 for area of square');
console.log('Enter 3 for area of triangle');

let choice = Number(prompt('Enter your choice: '));

switch (choice) {
    case 1:
        let length = Number(prompt('Enter length: '));
        let breadth = Number(prompt('Enter breadth: '));
        console.log('Area of Rectangle:', length * breadth);
        break;

    case 2:
        let side = Number(prompt('Enter side: '));
        console.log('Area of Square:', side * side);
        break;

    case 3:
        let height = Number(prompt('Enter height: '));
        let base = Number(prompt('Enter base: '));
        console.log('Area of Triangle:', (height * base) / 2);
        break;

    default:
        console.log('Invalid choice');
}
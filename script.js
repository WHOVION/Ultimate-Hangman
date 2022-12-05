console.log('hello')

// variables

const resetBtn = document.getElementById('reset')
const keyboard = document.getElementsByClassName('keyboard')
let main = document.getElementsByClassName('main')
// let word = document.getElementsByClassName('word')
let keys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's', 
    't', 
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]
let countries = [
    'argentina',
    'netherlands',
    'usa',
    'australia',
    'japan',
    'croatia',
    'brazil',
    'south korea',
    'france',
    'poland',
    'england',
    'senegal',
    'morocco',
    'spain',
    'portugal',
    'switzerland',
]

// random generator
//function randomCountry() { // cant be a function because we are not going to be calling it 
// }

let country = countries[Math.floor(Math.random() * countries.length)]
    //console.log(country)

// answer function using loop

let answer = [];
for (let i = 0; i < country.length; i++) {
    answer[i] = '_';
    // document.getElementsByID('word').innerText = answer[i]
}
console.log(answer) // DISPLAYS CORRECT

// game loop
const remainingLetters = country.length

    //for (remainingLetters > 0) { // CONSTANT LOOP
    document.getElementById('word').innerText = answer.join(' ')
    // console.log(answer.join(' '));
// // progress funtion 
// let guess = document.getElementsByClassName.innerText = ("Guess the word");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         console.log("please insert a single letter")
//     } else {
//         for (let j = 0; j < country.length; j++) {
//             if(country[j] === guess) {
//                 answer[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// console.log(answer.join(' '));
// console.log("Winner. the word was " + country);
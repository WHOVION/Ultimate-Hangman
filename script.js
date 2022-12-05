console.log('hello')
// make it all in a variable

const resetBtn = document.getElementById('reset')
let wordDisplay = document.getElementsByClassName('word')
const board = document.getElementsByClassName('keyboard')
let word = document.getElementsByClassName('word')

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

// random generator function 

function randomCountry() {
const country = countries[Math.floor(Math.random() * countries.length)];
//console.log(country)
}

// answer function using loop

let answer = [];
for (let i = 0; i < country.length; i++) {
    answer[i] = '_';
}
const remainingLetters = country.length

// game loop

while (remainingLetters > 0) {
    console.log(answer.join(' '));


// progress funtion 

let guess = prompt("Guess the word");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    console.log("please insert a single letter")
} else {
    for (let j = 0; j < country.lenght; j++) {
        if(country[j] === guess) {
            answer[j] = guess;
            remainingLetters--;
        }
    }
}
}
console.log(answer.join(' '));
console.log("Winner. the word was" + country);











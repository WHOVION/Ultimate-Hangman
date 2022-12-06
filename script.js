console.log('hello')

// variables

const resetBtn = document.getElementById('reset')
const keyboard = document.getElementsByClassName('keyboard')
let main = document.getElementsByClassName('main')
// let word = document.getElementsByClassName('word')
// let keys = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's', 
//     't', 
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
// ]
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
//console.log(answer) // DISPLAYS CORRECT

// game loop
const remainingLetters = country.length
let message = document.getElementsByClassName('message')

// while(remainingLetters > 0) { // CONSTANT LOOP
//     // join returns an array as a string
    //document.getElementById('word').innerText = answer.join(' ')
    //console.log(answer.join(' '));
// let input = document.getElementsByClassName('input')
//     if (input === null) {
//         break;
//     } else if (input.length !== 1) {
//         message.innerText = 'please insert a single letter'
//     } else {
//         for (let j = 0; j < country.length; j++) {
//             if(country[j] === input) {
//                 answer[j] = input;
//                 remainingLetters--;
//             }
//         }
//     }
// }

for (let i = remainingLetters; i > 0; i--) {
    //     // join returns an array as a string
    document.getElementById('word').innerText = answer.join(' ')
    //console.log(answer.join(' '));
    let input = document.getElementsByClassName('input')
    if (input === null) {
        break;
    } else if (input.length !== 1) {
        message.innerText = 'please insert a single letter'
    } else {
        for (let j = 0; j < country.length; j++) {
            if(country[j] === input) {
                answer[j] = input;
                remainingLetters--;
            }
        }
    }
}


const keys = document.querySelectorAll('.keys')
//console.log(keys.length)
for (let i = 0; i < keys.length; i++) {
    //console.log(keys[i].innerText)
    keys[i].addEventListener('click', function() {
        console.log(keys[i].innerText)
        if(click.target.innerText === answer) {
        
        }
    })
}


// when key is clicked
// check if it's word
// if yes (display word) while also making sure key cant be pressed again
// if not in word, make sure key cant be pressed again and display image while also adding reducing(or adding) a life to the max amount of lives



// (event.target.innerText)



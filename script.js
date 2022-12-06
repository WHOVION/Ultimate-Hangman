console.log('hello')

// variables

// const resetBtn = document.getElementById('reset')
// const keyboard = document.getElementsByClassName('keyboard')
// let main = document.getElementsByClassName('main')
// let mistakes = document.getElementById('#mistakes')
// let mistakes = 6

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

// let country = countries[Math.floor(Math.random() * countries.length)]
//     //console.log(country)
// let countryArr = country.split("")
// answer function using loop

// let placeholder = [];
// for (let i = 0; i < country.length; i++) {
//     placeholder[i] = '_';
    // document.getElementsByID('word').innerText = answer[i]
//}
//console.log(answer) // DISPLAYS CORRECT

// game loop
// const remainingLetters = country.length
// let message = document.getElementsByClassName('message')

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

// for (let i = remainingLetters; i > 0; i--) {
    //     // join returns an array as a string
     //document.getElementById('word').innerText = placeholder.join(' ')
    //console.log(answer.join(' '));
//     let input = document.getElementsByClassName('input')
//     if (input === null) {
//         break;
//     } else if (input.length !== 1) {
//         message.innerText = 'please insert a single letter'
//     } else {
//         for (let j = 0; j < country.length; j++) {
//             if(country[j] === input) {
//                 placeholder[j] = input;
//                 remainingLetters--;
//             }
//         }
//     }
// }


// const keys = document.querySelectorAll('.keys')
// //console.log(keys.length)
// for (let i = 0; i < keys.length; i++) {
//     //console.log(keys[i].innerText)
//     keys[i].addEventListener('click', function(e) {
//         console.log(e.target.innerText)
//         const wordIDX = country.indexOf(e.target.innerText)
//             if(wordIDX >= 0) {
//                 placeholder[wordIDX] = e.target.innerText
//                 document.getElementById('word').innerText = placeholder.join(' ')
//         } if (placeholder[] === country) {
//         } else {
//             mistakes--;
//             document.getElementById('mistakes').innerText = mistakes--;
//         }
//     })
// }


// when key is clicked
// check if it's word
// if yes (display word) while also making sure key cant be pressed again
// if not in word, make sure key cant be pressed again and display image while also adding reducing(or adding) a life to the max amount of lives



// (event.target.innerText)
const resetBtn = document.getElementById('reset')
const keyboard = document.getElementsByClassName('keyboard')
let main = document.getElementsByClassName('main')

let mistakes = 6



let country = countries[Math.floor(Math.random() * countries.length)]
let countryArr = country.split("")


let placeholder = [];
for (let i = 0; i < country.length; i++) {
    placeholder[i] = '_';
}


const remainingLetters = country.length
const message = document.querySelector('.message')


document.getElementById('word').innerText = placeholder.join(' ')


const keys = document.querySelectorAll('.keys')
 
//console.log(keys.length)
for (let i = 0; i < keys.length; i++) {
    //console.log(keys[i].innerText)
    keys[i].addEventListener('click', function(e) {
        console.log(e.target.innerText)
        const wordIDX = country.indexOf(e.target.innerText)
            if(wordIDX >= 0) {
                placeholder[wordIDX] = e.target.innerText
                document.getElementById('word').innerText = placeholder.join(' ')
            } else {
                mistakes--;
                document.getElementById('mistakes').innerText = mistakes;
                if(mistakes <= 0) {
                    console.log('loser')
                    message.innerText = 'YOU NEED TO GO BACK TO GEOGRAPHY CLASS'
                }
            } if (placeholder.join(' ') === country) {
                message.innerText = 'WINNER WINNER CHICKEN DINNER'
            }
        })
}






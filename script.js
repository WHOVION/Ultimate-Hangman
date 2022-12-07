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
    // 'argentina',
    // 'netherlands',
    'usa',
    // 'australia',
    'japan',
    // 'croatia',
    //'brazil',
    // 'south korea',
    // 'france',
    // 'poland',
    // 'england',
    // 'senegal',
    // 'morocco',
    // 'spain',
    // 'portugal',
    // 'switzerland',
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
const reset = document.getElementById('reset')
const keyboard = document.getElementsByClassName('keyboard')
const container = document.getElementById('cotainer')
const word = document.getElementById('word')
const timeDisplay = document.querySelector('#timer')
let mistakes = 6

 
    let country = countries[Math.floor(Math.random() * countries.length)]
    console.log(country)
    country = country.split("")



    let placeholder = [];
    for (let i = 0; i < country.length; i++) {
        placeholder[i] = '_';
    }
    //console.log(placeholder)

    let remainingLetters = country.length
    const message = document.querySelector('.message')
    word.innerText = placeholder.join(' ')
    let keys = document.querySelectorAll('.keys')
    //console.log(keys.length)


    for (let i = 0; i < keys.length; i++) {
    //console.log(keys[i].innerText)
        keys[i].addEventListener('click', function(e) {
            //console.log(e.target.innerText)
            timer()
            let matched = false;
            for (let i = 0; i < country.length; i++) {
                if (e.target.innerText === country[i]) {
                    placeholder[i] = e.target.innerText
                    matched = true;
                    word.innerText = placeholder.join(' ')
                    // subtract remainingLetters
                    remainingLetters--;
                    console.log(remainingLetters)
                }
            } if (!matched) {
                mistakes--;
                document.getElementById('mistakes').innerText = mistakes;
                if(mistakes <= 0) {
                    //console.log('loser')
                    message.innerText = 'YOU NEED TO GO BACK TO GEOGRAPHY CLASS'
                    //disable.keys
                }
            } if (remainingLetters === 0) {
                    //container.style = clear
                    message.innerText = 'WINNER WINNER CHICKEN DINNER'
                }
            })
    }


    function timer() {
        let sec = 10
        activeTimer = setInterval(() => {
            timeDisplay.innerHTML = sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer)
                message.innerText = 'YOU NEED TO GO BACK TO GEOGRAPHY CLASS'
            }
        }, 1000)
    }


    function stopEv() {
        stoptimer()
    }

    // (function(){
    //     let sec = 20
    //     timer = setInterval(() => {
    //         countdown.innerHTML = sec;
    //         sec--;
    //         if (sec < 0) {
    //             clearInterval(timer)
    //         }
    //     }, 1000)
    // })()


    // reset.addEventListener('click', function(e) {
    //     keys.default
    // })

    // function resetBtn(e) {
    //     reset.addEventListener('click', )
    // }




// if word is complete, add message to main box
// lives is done, add message to whole main box
// disable all buttons after timer/lives/winner occurs
// link images to mistakes

// ?
// reset button







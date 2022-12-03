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
const countryAns = countries[Math.floor(Math.random() * countries.length)];
//console.log(countryAns)
}
//console.log(countryAns)

// keyboard function 

function keyboard() {
    <button
}










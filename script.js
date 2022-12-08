console.log('hello')

// variables
let countries = [
    'ARGENTINA',
    'NETHERLANDS',
    'USA',
    'AUSTRALIA',
    'JAPAN',
    'CROATIA',
    'BRAZIL',
    'SOUTHKOREA',
    'FRANCE',
    'POLAND',
    'ENGLAND',
    'SENEGAL',
    'MOROCCO',
    'SPAIN',
    'PORTUGAL',
    'SWITZERLAND',
    'QUATAR',
    'ECUADOR',
    'IRAN',
    'WALES',
    'MEXICO',
    'SAUDIARABIA',
    'TUNISIA',
    'DENMARK',
    'GERMANY',
    'COSTARICA',
    'BELGIUM',
    'CANADA',
    'CAMEROON',
    'SERBIA',
    'URUGUAY',
    'GHANA'
]


const reset = document.getElementById('reset')
const container = document.getElementById('container')
let word = document.getElementById('word')
const timeDisplay = document.querySelector('#timer')
let mistakes = 6
let sec = 15
document.getElementById('test0').classList.remove('hidden')



    let country = countries[Math.floor(Math.random() * countries.length)]
    console.log(country)
    // split returns string as an array// makes letter a string
    country = country.split("")
    


    let placeholder = [];
    for (let i = 0; i < country.length; i++) {
        placeholder[i] = '_';
    }


    let remainingLetters = country.length
    let message = document.querySelector('.message')
    word.innerText = placeholder.join(' ')
    let keys = document.querySelectorAll('.keys')
    let gameRunning = false


    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function(e) {
            if (!gameRunning) {
                timer()
                gameRunning = true
            }
            e.currentTarget.disabled = true
            let matched = false;
            for (let i = 0; i < country.length; i++) {
                if (e.target.innerText === country[i]) {
                    placeholder[i] = e.target.innerText
                    matched = true;
                    word.innerText = placeholder.join(' ')
                    remainingLetters--;
                }
            } if (!matched) {
                mistakes--;
                document.getElementById('mistakes').innerText = mistakes; 
                    switch (mistakes) {
                    case 5:
                        console.log('mistakes')
                        document.getElementById('test0').classList.add('hidden')
                        document.getElementById('test1').classList.remove('hidden')
                      break;
                    case 4:
                    document.getElementById('test1').classList.add('hidden')
                    document.getElementById('test2').classList.remove('hidden')
                    break;
                    case 3:
                    document.getElementById('test2').classList.add('hidden')
                    document.getElementById('test3').classList.remove('hidden')
                      break;
                    case 2:
                    document.getElementById('test3').classList.add('hidden')
                    document.getElementById('test4').classList.remove('hidden')
                      break;
                    case 1:
                    document.getElementById('test4').classList.add('hidden')
                    document.getElementById('test5').classList.remove('hidden')
                      break;
                    case 0:
                    document.getElementById('test5').classList.add('hidden')
                    document.getElementById('test6').classList.remove('hidden')
                      break;
                      //default:(mistakes)
                }
                if(mistakes <= 0) {
                    message.innerText = 'YOU NEED TO GO BACK TO GEOGRAPHY CLASS'
                    // clearInterval(timer)
                    clearTimeout(activeTimer) 
                    disKey()
                }
            } if (remainingLetters === 0) {
                    //container.style = clear
                    message.innerText = 'WINNER WINNER CHICKEN DINNER'
                    document.getElementById('test0').classList.add('hidden')
                    document.getElementById('test1').classList.add('hidden')
                    document.getElementById('test2').classList.add('hidden')
                    document.getElementById('test3').classList.add('hidden')
                    document.getElementById('test4').classList.add('hidden')
                    document.getElementById('test5').classList.add('hidden')
                    document.getElementById('test6').classList.add('hidden')
                    document.getElementById('winningPic').classList.remove('hidden')
                    // clearInterval(timer)
                    clearTimeout(activeTimer) 
                    disKey()
                    console.log('hello')
                }
            })
    }


    function timer() {
        let sec = 15
        activeTimer = setInterval(() => {
            timeDisplay.innerHTML = sec;
            sec--;
            if (sec < 0) {
                // clearInterval(timer)
                clearTimeout(activeTimer) 
                message.innerText = 'YOU NEED TO GO BACK TO GEOGRAPHY CLASS'
                document.getElementById('test0').classList.add('hidden')
                document.getElementById('test1').classList.add('hidden')
                document.getElementById('test2').classList.add('hidden')
                document.getElementById('test3').classList.add('hidden')
                document.getElementById('test4').classList.add('hidden')
                document.getElementById('test5').classList.add('hidden')
                document.getElementById('winningPic').classList.add('hidden')
                document.getElementById('test6').classList.remove('hidden')
            }
        }, 1000)
    }

    function disKey() {
        keys.forEach(key => {
            key.disabled = true
        })
    }

    function resetWord() {

        word = document.getElementById('word')

        country = countries[Math.floor(Math.random() * countries.length)]
        console.log(country)
        country = country.split("")
        console.log(country)

    
        placeholder = [];
        for (let i = 0; i < country.length; i++) {
            placeholder[i] = '_';
        }

        remainingLetters = country.length
        word.innerText = placeholder.join(' ')
    }


    function resetGame() {
        resetWord()
        message.innerText = ''
        clearTimeout(activeTimer) 
        mistakes = 5
        document.getElementById('timer').innerText = sec;
        document.getElementById('mistakes').innerText = mistakes;
        document.getElementById('test0').classList.remove('hidden')
        document.getElementById('test0').style.display = 'inline-block'
        document.getElementById('test1').classList.add('hidden')
        document.getElementById('test2').classList.add('hidden')
        document.getElementById('test3').classList.add('hidden')
        document.getElementById('test4').classList.add('hidden')
        document.getElementById('test5').classList.add('hidden')
        document.getElementById('test6').classList.add('hidden')
        document.getElementById('winningPic').classList.add('hidden')
        keys.forEach(key => {
            key.disabled = false
        })
        gameRunning = false
    }

    reset.addEventListener('click', function(e) {
        resetGame();
    })










console.log('hello')

// variables
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


// (event.target.innerText)
const reset = document.getElementById('reset')
const keyboard = document.getElementsByClassName('keyboard')
const container = document.getElementById('cotainer')
const word = document.getElementById('word')
const timeDisplay = document.querySelector('#timer')
let mistakes = 6
let sec = 20

 
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
            //timer()
            let matched = false;
            for (let i = 0; i < country.length; i++) {
                if (e.target.innerText === country[i]) {
                    placeholder[i] = e.target.innerText
                    matched = true;
                    word.innerText = placeholder.join(' ')
                    // subtract remainingLetters
                    remainingLetters--;
                    // console.log(remainingLetters)
                }
            } if (!matched) {
                mistakes--;
                document.getElementById('mistakes').innerText = mistakes; 
                    switch (mistakes) {
                    case 5:
                        console.log('mistakes')
                        document.getElementById('test0').style.display = 'none'
                        document.getElementById('test1').classList.remove('hidden')
                      break;
                    //   console.log(mistakes)
                    case 4:
                    document.getElementById('test0').classList.add('hidden')
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
                }
                // console.log(mistakes)
                if(mistakes <= 0) {
                    //console.log('loser')
                    message.innerText = 'YOU NEED TO GO BACK TO GEOGRAPHY CLASS'
                    //disable.keys
                }
            } if (remainingLetters === 0) {
                    //container.style = clear
                    message.innerText = 'WINNER WINNER CHICKEN DINNER'
                    document.getElementById('test0').classList.add('hidden')
                    document.getElementById('winningPic').classList.remove('hidden')
                }
                timer()
            })
    }


    function timer() {
        let sec = 20
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

    function resetGame() {
        mistakes = 6
        sec = 20    
        document.getElementById('timer').innerText = sec;
        document.getElementById('mistakes').innerText = mistakes;
        // document.querySelectorAll('.hidden').classList('hidden')
        document.getElementById('test6').classList.add('hidden')
        document.getElementById('test5').classList.add('hidden')
        document.getElementById('test4').classList.add('hidden')
        document.getElementById('test3').classList.add('hidden')
        document.getElementById('test2').classList.add('hidden')
        document.getElementById('test1').classList.add('hidden')
        document.getElementById('test0').style.display = 'inline-block'
        // document.getElementById('keyboard').disabled = true
        document.getElementById('keyboard').onclick='this.disabled = true'


        // country = countries[Math.floor(Math.random() * countries.length)]
        // reset all global variables
        // buttons undisable
        console.log('clicked')
    }

    reset.addEventListener('click', function(e) {
        resetGame() 

       
    })

   
    





// ?
// reset button for word and buttons
//reset all buttons when win or lose








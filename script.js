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
                        document.getElementById('test1').style.display = 'none'
                        document.getElementById('test2').classList.remove('hidden')
                      break;
                    //   console.log(mistakes)
                    case 4:
                    document.getElementById('test3').classList.remove('hidden')
                    //     document.querySelector('img1').style.display.none
                    //     document.querySelector('img2').style.displayRemove.none
                    //   break;
                    // case 3:
                    //     document.querySelector('img2').style.display.none
                    //     document.querySelector('img3').style.displayRemove.none
                    //   break;
                    // case 2:
                    //     document.querySelector('img3').style.display.none
                    //     document.querySelector('img4').style.displayRemove.none
                    //   break;
                    // case 1:
                    //     document.querySelector('img4').style.display.none
                    //     document.querySelector('img5').style.displayRemove.none
                    //   break;
                    // case 0:
                    //     document.querySelector('img5').style.display.none
                    //     document.querySelector('img6').style.displayRemove.none
                    //   break;
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
                    document.querySelector('.img0').style.display(none)
                    document.querySelector('.winner').style.displayRemove(none)
                }
                timer()
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

    // switch (function() {
                //     case 0:
                //       document.querySelector('img0').style.display.none
                //       document.querySelector('img1').style.displayRemove.none
                //       break;
                //     case 1:
                //         document.querySelector('img1').style.display.none
                //         document.querySelector('img2').style.displayRemove.none
                //       break;
                //     case 2:
                //         document.querySelector('img2').style.display.none
                //         document.querySelector('img3').style.displayRemove.none
                //       break;
                //     case 3:
                //         document.querySelector('img3').style.display.none
                //         document.querySelector('img4').style.displayRemove.none
                //       break;
                //     case 4:
                //         document.querySelector('img4').style.display.none
                //         document.querySelector('img5').style.displayRemove.none
                //       break;
                //     case 5:
                //         document.querySelector('img5').style.display.none
                //         document.querySelector('img6').style.displayRemove.none
                //       break;
                // })







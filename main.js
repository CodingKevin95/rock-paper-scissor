let displayMainCharacterInfo = document.getElementById('characterInfo')
let button = document.querySelector('button')
let container = document.querySelector('.textcomputer')
let inputDiv = document.querySelector('.userNameInput')
container.style.visibility = 'hidden';
let scoreTracker = document.querySelector('.scoreTrack')
scoreTracker.style.visibility = 'hidden'
let test = document.querySelector('#clickstart')
document.querySelector(".instructionImg").style.visibility = 'hidden'


test.addEventListener('click', async () => {
test.style.visibility = 'hidden';
container.style.visibility = 'visible';
let nothingRestart = document.querySelector('.nothingRestart');
nothingRestart.remove();
let nothingUserNameButton = document.querySelector('.nothingUserNameButton');
setTimeout(function(){nothingUserNameButton.remove()}, 800);


let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.querySelector('#user-score')
let computerScoreDisplay = document.querySelector('#computer-score')

//Function to display letters one at a time
function revealOneCharacter(list) {
    let next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");
    let delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function(){
            revealOneCharacter(list);
        }, delay)
    }
}

//restart button
function restartButton() {
    let restartButton = document.createElement("a");
    restartButton.textContent = "Restart"
    restartButton.className = "restart";
    document.querySelector('#header').appendChild(restartButton);
    document.querySelector('.restart').href = "#";
    restartButton.addEventListener('click', async () => {
        reload = location.reload();
    })
}


//First funtion to call in
function intro () {
    test.addEventListener('click', async () =>{
        document.querySelectorAll('.revealed').innerHTML = '';
    })

//Dialog section
let Intro = [
    {string: "Hey you, what's your name?", speed: 30}
]

//For the intro section
let characters = [];
Intro.forEach((line, index) => {

    if(index < Intro.length - 1) {
        line.string += " ";
    }

    line.string.split("").forEach(character => {
        let span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span)
        characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || []
        })
    })
})

function revealOneCharacter(list) {
    let next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");

    
    let delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function(){
            revealOneCharacter(list);
        }, delay)
    }

}
revealOneCharacter(characters)

}

//******************************************************** */
function userName() {
    let input = document.createElement("input");
    input.type = "text";
    input.className = "userName";
    // document.querySelector('.userNameInput').appendChild(input);
    setTimeout(function(){document.querySelector('.userNameInput').appendChild(input)}, 750);
    let button = document.createElement("button");
    button.textContent = "Enter"
    button.className = "userNameButton";
    // document.querySelector('.userNameInput').appendChild(button);
    setTimeout(function(){document.querySelector('.userNameInput').appendChild(button)}, 750);

    button.addEventListener('click', async () => {
        //Captialize first letter of name, hide button and input, and remove the dialog text
        let enteredName = input.value.charAt(0).toUpperCase() + input.value.slice(1)
        button.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
        console.log(enteredName);
        document.querySelectorAll('.revealed').forEach(function(a) {
        a.remove()
        })

     //Use name to greet character
     let Greeting = [
        {string: `What a lovely name! Welcome to our innovative, never before seen, newly created, 100% original game called: `, speed: 25},
        {string: "ROCK, PAPER, SCISSORS!!!", speed: 150},
        {string: `Whenever you're ready ${enteredName}, please click next.`, speed: 25}
    ]

     let characters = [];
     Greeting.forEach((line, index) => {

     if(index < Greeting.length - 1) {
        line.string += " ";
     }

     line.string.split("").forEach(character => {
        let span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span)
        characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || [],
        })
        })
        })
        revealOneCharacter(characters)

        
        let button1 = document.createElement("button");
        button1.textContent = "Next"
        button1.className = "bottomNext";
        setTimeout(function(){document.querySelector('.textcomputer').appendChild(button1)}, 6500);
        button1.addEventListener('click', async () => {
            button1.style.visibility = 'hidden'
            document.querySelectorAll('.revealed').forEach(function(a) {
            a.remove()
            } )
            let Greeting = [
                {string: `The rules are simple. Rock beats scissors, scissors beats paper, and if you haven't guessed it, paper beats rock. First to 5 points wins.`, speed: 25},
            ]
        
             let characters = [];
             Greeting.forEach((line, index) => {
        
             if(index < Greeting.length - 1) {
                line.string += " ";
             }
        
             line.string.split("").forEach(character => {
                let span = document.createElement("span");
                span.textContent = character;
                container.appendChild(span)
                characters.push({
                    span: span,
                    isSpace: character === " ",
                    delayAfter: line.speed,
                    classes: line.classes || []
                })
                })
                })
                revealOneCharacter(characters)

            document.querySelector(".instructionImg").style.visibility = 'visible'
            let imageBox = document.querySelector('#instructionImg')

            //first row rock
            let rockimg = document.createElement('img');
            rockimg.className = "rockimg";
            rockimg.src = 'rock.png'
            imageBox.appendChild(rockimg);

            //Arrow one
            let arrow1 = document.createElement('img');
            arrow1.className = "arrow1";
            arrow1.src = 'arrow.png'
            imageBox.appendChild(arrow1);

             //first row scissors
            let img = document.createElement('img');
            img.className = "scissorimg";
            img.src = 'scissors2.png'
            imageBox.appendChild(img);

            //second row scissors
            let img2 = document.createElement('img');
            img2.className = "scissorimg2";
            img2.src = 'scissors2.png'
            imageBox.appendChild(img2);

            //Arrow two
            let arrow2 = document.createElement('img');
            arrow2.className = "arrow2";
            arrow2.src = 'arrow.png'
            imageBox.appendChild(arrow2);

            //second row paper
            let paperimg = document.createElement('img');
            paperimg.className = "paperimg";
            paperimg.src = 'paper.png'
            imageBox.appendChild(paperimg);

            //third row paper
            let paperimg2 = document.createElement('img');
            paperimg2.className = "paperimg2";
            paperimg2.src = 'paper.png'
            imageBox.appendChild(paperimg2);

            //Arrow three
            let arrow3 = document.createElement('img');
            arrow3.className = "arrow3";
            arrow3.src = 'arrow.png'
            imageBox.appendChild(arrow3);

            //Third row rock
            let rockimg2 = document.createElement('img');
            rockimg2.className = "rockimg2";
            rockimg2.src = 'rock.png'
            imageBox.appendChild(rockimg2);


            // Start the game with a button****************************************************
            let letsPlayButton = document.createElement("button");
            letsPlayButton.textContent = "Let's Play"
            letsPlayButton.className = "playButton";
            setTimeout(function(){document.querySelector('.textcomputer').appendChild(letsPlayButton)}, 2800);
            

            letsPlayButton.addEventListener('click', async () => {
                
                let offDisplayChat = document.createElement('div')
                offDisplayChat.className = 'offDisplayChat';
                document.body.appendChild(offDisplayChat)

                let confirmOff = document.createElement('button');
                confirmOff.className = 'confirmOff';
                confirmOff.textContent = 'Confirm'
                offDisplayChat.appendChild(confirmOff);

                let confirmOff2 = document.createElement('button');
                confirmOff2.className = 'confirmOff';
                confirmOff2.textContent = 'Confirm'
                document.querySelector('.textcomputer').appendChild(confirmOff2);

                let weaponIcon = document.createElement('div')
                weaponIcon.className = 'weaponIcon'
                document.querySelector('.gameplay').appendChild(weaponIcon);

                let computerPick = document.createElement('div')
                computerPick.className = 'computerIcon'
                document.querySelector('.gameplay').appendChild(computerPick)

                imageBox.style.visibility = 'hidden';
                scoreTracker.style.visibility = 'visible';
                letsPlayButton.style.visibility = 'hidden'
            document.querySelectorAll('.revealed').forEach(function(a) {
                a.remove()
                })
            document.querySelectorAll('img').forEach(function(b) {
                b.remove()
                })
            document.querySelector('.textcomputer').style.visibility = 'hidden'
            
            //Display who won
            let displayWhoWon = document.createElement("div");
            displayWhoWon.className = 'displayWhoWon'
            document.body.appendChild(displayWhoWon)
            let whoWon = document.querySelector('.displayWhoWon')
            whoWon.style.visibility = 'visible'

            //Create computer display
            let computerRock = document.createElement('img');
                    computerRock.className = "computerRock";
                    computerRock.src = 'rock.png';
                    computerPick.appendChild(computerRock);
                    document.querySelector('.computerRock').style.visibility = 'hidden'

            let computerPaper = document.createElement('img');
                    computerPaper.className = "computerPaper";
                    computerPaper.src = 'paper.png';
                    computerPick.appendChild(computerPaper);
                    document.querySelector('.computerPaper').style.visibility = 'hidden'

            let computerScissor = document.createElement('img');
                    computerScissor.className = "computerScissor";
                    computerScissor.src = 'scissors2.png';
                    computerPick.appendChild(computerScissor);
                    document.querySelector('.computerScissor').style.visibility = 'hidden'

            function getComputerChoice() {
                const choices = ['rock', 'paper', 'scissor'];;
                const randomNumber = Math.floor(Math.random() * 3);
                if (choices[randomNumber] === 'rock') {
                    document.querySelector('.computerRock').style.visibility = 'visible'
                    setTimeout(function(){document.querySelector('.computerRock').style.visibility = 'hidden'}, 700)
                } else if (choices[randomNumber] === 'paper') {
                    document.querySelector('.computerPaper').style.visibility = 'visible'
                    setTimeout(function(){document.querySelector('.computerPaper').style.visibility = 'hidden'}, 700)
                } else {
                    document.querySelector('.computerScissor').style.visibility = 'visible'
                    setTimeout(function(){document.querySelector('.computerScissor').style.visibility = 'hidden'}, 700)
                }
                return choices[randomNumber];
            }


            let buttonC = document.createElement('button');
            buttonC.textContent = "Confirm"
            buttonC.className = 'confirmWin';
            document.querySelector('.textcomputer').appendChild(buttonC)
            buttonC.style.visibility='hidden'

            function win(userChoice, computerChoice) {
                userScore++;
                userScoreDisplay.innerHTML = "User: " + userScore;
                computerScoreDisplay.innerHTML = "Computer: " + computerScore;
                whoWon.innerHTML = userChoice.charAt(0).toUpperCase()+userChoice.slice(1) + ' beats ' + computerChoice + ". You win"
                if (userScore === 5) {
                    userScore = 0;
                    computerScore = 0;

                    let coverScreen = document.createElement('div');
                    coverScreen.className= "coverScreen"
                    document.body.appendChild(coverScreen);

                    document.querySelector('.textcomputer').style.visibility='visible'
                    document.querySelector('.offDisplayChat').style.visibility= 'hidden'

                    setTimeout(function(){buttonC.style.visibility = 'visible'}, 1400);


                    let Congrats = [
                        {string: `Congrats, you won, if you want to play again, click "confirm."`, speed: 25},
                    ]

                     let characters = [];
                     Congrats.forEach((line, index) => {
                
                     if(index < Congrats.length - 1) {
                        line.string += " ";
                     }
                
                     line.string.split("").forEach(character => {
                        let span = document.createElement("span");
                        span.textContent = character;
                        container.appendChild(span)
                        characters.push({
                            span: span,
                            isSpace: character === " ",
                            delayAfter: line.speed,
                            classes: line.classes || []
                        })
                        })
                        })
                        revealOneCharacter(characters)

                    buttonC.addEventListener('click', async () => {
                        buttonC.style.visibility = 'hidden'
                        coverScreen.remove()
                        document.querySelectorAll('.revealed').forEach(function(a) {
                            a.remove()
                            } )
                        document.querySelector('.textcomputer').style.visibility='hidden'
                        document.querySelector('.offDisplayChat').style.visibility= 'visible'
                    })

                }
            }

            function lose(userChoice, computerChoice) {
                computerScore++;
                userScoreDisplay.innerHTML ="User: " + userScore;
                computerScoreDisplay.innerHTML ="Computer: " +  computerScore;
                whoWon.innerHTML = userChoice.charAt(0).toUpperCase()+userChoice.slice(1) + ' gets beat by ' + computerChoice + ". You lose"
                console.log(userChoice);
                if (computerScore === 5) {
                    userScore = 0;
                    computerScore = 0;

                    let coverScreen = document.createElement('div');
                    coverScreen.className= "coverScreen"
                    document.body.appendChild(coverScreen);

                    document.querySelector('.textcomputer').style.visibility='visible'
                    document.querySelector('.offDisplayChat').style.visibility= 'hidden'

                    setTimeout(function(){buttonC.style.visibility = 'visible'}, 1400);


                    let Congrats = [
                        {string: `You lost, better luck next time. If you want to play again click "confirm."`, speed: 25},
                    ]

                     let characters = [];
                     Congrats.forEach((line, index) => {
                
                     if(index < Congrats.length - 1) {
                        line.string += " ";
                     }
                
                     line.string.split("").forEach(character => {
                        let span = document.createElement("span");
                        span.textContent = character;
                        container.appendChild(span)
                        characters.push({
                            span: span,
                            isSpace: character === " ",
                            delayAfter: line.speed,
                            classes: line.classes || []
                        })
                        })
                        })
                        revealOneCharacter(characters)

                    buttonC.addEventListener('click', async () => {
                        buttonC.style.visibility = 'hidden'
                        coverScreen.remove()
                        document.querySelectorAll('.revealed').forEach(function(a) {
                            a.remove()
                            } )
                        document.querySelector('.textcomputer').style.visibility='hidden'
                        document.querySelector('.offDisplayChat').style.visibility= 'visible'
                    })

                }
            }
                
            

            function tie(userChoice, computerChoice) {
                whoWon.innerHTML = "Both players picked " + userChoice  + ". You tied"
                console.log(userChoice);
            }

            function game(userChoice) {
                const computerChoice = getComputerChoice();
                // console.log('You picked: ' + userChoice);
                // console.log('Computer selected: ' + computerChoice);

                switch (userChoice + computerChoice) {
                case 'rockscissor':
                case 'paperrock':
                case 'scissorpaper':
                    // console.log('User win')
                    win(userChoice, computerChoice);
                    break;
                case 'paperscissor':
                case 'scissorrock':
                case 'rockpaper':
                    // console.log('User lost')
                    lose(userChoice, computerChoice);
                    break;
                case 'scissorscissor':
                case 'paperpaper':
                case 'rockrock':
                    // console.log('Tie')
                    tie(userChoice,computerChoice);
                    break;
            }
        }

            let userLabel = document.createElement('p')
            userLabel.className = "userLabel";
            userLabel.textContent = 'Player Selection';
            weaponIcon.appendChild(userLabel)

            let computerLabel = document.createElement('p')
            computerLabel.className = "computerLabel";
            computerLabel.textContent = "Computer Selection"
            computerPick.appendChild(computerLabel);

            let brokenLight = document.createElement('div')
            brokenLight.className = "brokenLight";
            document.querySelector('.computerIcon').appendChild(brokenLight);
        
            function main() {
            //Click able rock
            let clickRock = document.createElement('img');
            clickRock.className = "clickRock";
            clickRock.src = 'rock.png';
            weaponIcon.appendChild(clickRock);
            clickRock.addEventListener('click', async () => {
                document.querySelector('.clickRock').classList.add('glow');
                setTimeout(function(){document.querySelector('.clickRock').classList.remove('glow')}, 200);
                game('rock');
            })


            let clickPaper = document.createElement('img');
            clickPaper.className = "clickPaper";
            clickPaper.src = 'paper.png'
            weaponIcon.appendChild(clickPaper);
            clickPaper.addEventListener('click', async () => {
                document.querySelector('.clickPaper').classList.add('glow');
                setTimeout(function(){document.querySelector('.clickPaper').classList.remove('glow')}, 200);
                game('paper');
            })

            let clickScissor = document.createElement('img');
            clickScissor.className = "clickScissor";
            clickScissor.src = 'scissors2.png'
            weaponIcon.appendChild(clickScissor);
            clickScissor.addEventListener('click', async () => {
                document.querySelector('.clickScissor').classList.add('glow');
                setTimeout(function(){document.querySelector('.clickScissor').classList.remove('glow')}, 200);
                game('scissor');

            })
        }
            main();
            })
        })

        })

}

restartButton()
intro()
userName()
})

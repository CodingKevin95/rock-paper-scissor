let displayMainCharacterInfo = document.getElementById('characterInfo')
let button = document.querySelector('button')
let container = document.querySelector('.textcomputer')

class Character {
    constructor (name, hp) {
        this.name = name,
        this.hp = hp
    }
}

// function askName() {
// let characterName = prompt("What is our main charcter's name?");
// if (characterName == null) {
//     alert('You clicked cancel, please enter name')
//     askName();
// }
// return characterName;
// }

// function difficulty() {
//     let difficultyChoose = prompt(`Type "easy" for 30 Health, normal for 25 Health, or hard for 20 Health`)
//     if (difficultyChoose == "easy") {
//         hp = 30
//     } else if (difficultyChoose == "normal") {
//         hp = 25
//     } else if (difficulty == "hard") {
//         hp = 20
//     } else {
//         alert('Incorrect input try again')
//         difficulty()
//     }
//     return hp
// }


button.addEventListener('click', async () => {
// let charaName = askName()
// let charaHp = difficulty()
button.style.visibility = 'hidden'
// const characterCreation = new Character (`${charaName}`, `${charaHp}`)
// displayMainCharacterInfo.innerHTML = 'Name: ' + characterCreation.name + ' Health: ' + characterCreation.hp


// console.log(characterCreation);
// })

let speeds = {
    slow: 300,
    normal: 100,
    fast: 30
}

let Intro = [
    // {string: characterCreation, speed: speeds.normal},
    {string: "Hey you, what's your name?", speed: speeds.normal},
    {string: ".......................", speed: speeds.slow},
    {string: "What are you waiting for, what's your name!!!???", speed: speeds.fast},
]

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
    next.span.classList.add("revealed")
    
    let delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function(){
            revealOneCharacter(list);
        }, delay)
    }

}

function userName() {
    let input = document.createElement("input");
    input.type = "text";
    input.className = "userName";
    document.querySelector('.userNameInput').appendChild(input);
    //**************
    let button = document.createElement("button");
    button.innerHTML = 'Enter';
    button.type = "submit"
    button.className = "userNameButton";
    document.querySelector('.userNameButton').appendChild(button);
}

revealOneCharacter(characters)
userName()

})
// Card:
let card = [
    "Bird", "Bone", "Cat", "Dog", "Fish", "Heart", "Snail", "Thunder",
]

// LET:
let startButton = document.getElementById('startGame');

//LET SCREEN:
let gameScreen = document.getElementById('gameScreen');

// EVENTS BUTTON:
startButton.addEventListener('click', start);

// START GAME:
function start(){

    for (let nbCase = 1; nbCase <= 16; nbCase++){
        let createDiv = document.createElement('div');
        gameScreen.appendChild(createDiv);

        let randomCaseClass = Math.floor((Math.random() * card.length));
        createDiv.classList.add( "card" + card[randomCaseClass] )
        console.log("card"+card[randomCaseClass]);

        
    }

}

// Random image case:
function randomCase(){

}

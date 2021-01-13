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

// START GAME & RESET:
let startcount = true;

function start(){
    if (startcount === true){
        for (let nbCase = 1; nbCase <= 16; nbCase++){
            let createDiv = document.createElement('div');
            let createimage = document.createElement('img');
            gameScreen.appendChild(createDiv);
            createDiv.appendChild(createimage);

            let randomCaseClass = Math.floor((Math.random() * card.length));
            createDiv.classList.add( "card" + card[randomCaseClass] )
            createimage.src = "card" + card[randomCaseClass] + ".PNG";

            console.log("card"+card[randomCaseClass]);

            startButton.innerHTML = "Restart";
            startcount = false;
        }
    }

    else if (startcount === false){
        for (let nbCase = 1; nbCase <= 16; nbCase++){
            gameScreen.innerHTML = "";

            startcount = true;
            start();
        }
    }

}

// Random image case:
function randomCase(){

}

// Card:
let card = [
    "Bird", "Bone", "Cat", "Dog", "Fish", "Heart", "Snail", "Thunder",
]
let round = 2;

// LET:
let startButton = document.getElementById('startGame');
let scoreScreen = document.getElementById("score");
let score = 0;

//LET SCREEN:
let gameScreen = document.getElementById('gameScreen');

// EVENTS BUTTON:
startButton.addEventListener('click', start);

// START GAME & RESET:
let startcount = true;

function start(){
    let identifiant = 0;

    if (startcount === true){
        let cardRandom = Array.from(card);
        let compteur = 0;

// Search and attribute div for two cards:
        function bouclePlacements (){
            for (let nbCase = 1; nbCase <= 8; nbCase++){
                let createDiv = document.createElement('div');
                let createimage = document.createElement('img');
                gameScreen.appendChild(createDiv);
                createDiv.appendChild(createimage);

                let randomCaseClass = Math.floor((Math.random() * cardRandom.length));
                createDiv.classList.add( "card" + cardRandom[randomCaseClass] );
                createDiv.classList.add('cards');
                createDiv.id = identifiant;
                createDiv.classList.add("false");
                createimage.src = "card" + cardRandom[randomCaseClass] + ".PNG";
                cardRandom.splice(randomCaseClass, 1);
                identifiant++;

                if (nbCase === 8 && compteur === 0){
                    cardRandom = Array.from(card);
                    compteur = 1;
                    bouclePlacements();
                }
                startButton.innerHTML = "Restart";
                startcount = false;
            }
        }
// Search for complete case:
        bouclePlacements();
    }

// Reset:
    else if (startcount === false){
        for (let nbCase = 1; nbCase <= 16; nbCase++){
            gameScreen.innerHTML = "";

            startcount = true;
            round = 2;
            start();
        }
    }
    cardSelect();
}

// Select card:
let cards = document.getElementsByClassName('cards');
let cardsSelections = [];
let cardsSelected = [];

function cardSelect (){
    for (let card of cards){
        card.addEventListener('click', function (){
            if (round  !== 0) {
                if (card.classList.contains("false")) {
                    card.classList.remove("false");
                    card.classList.add("true");
                    cardsSelections.push(card.classList);
                    round--;
                    cardsSelected.push(card.id);

                    if (round === 0) {
                        if (cardsSelections[0][0] === cardsSelections[1][0]) {
                            score++;
                            scoreScreen.innerHTML = score;

                            cardsSelections.splice(0, cardsSelections.length);
                            cardsSelected.splice(0, cardsSelected.length);
                            round = 2;
// If Victory 4s for reset game:
                            if (score === 8){
                                victory();
                                setTimeout(function (){
                                    startcount = false;
                                    score = 0;
                                    start();
                                }, 4000);
                            }
                        }

                        else {
                            setTimeout(function (){
                                document.getElementById(cardsSelected[0]).classList.add('false');
                                document.getElementById(cardsSelected[1]).classList.add('false');
                                document.getElementById(cardsSelected[0]).classList.remove('true');
                                document.getElementById(cardsSelected[1]).classList.remove('true');

                                cardsSelections.splice(0, cardsSelections.length);
                                cardsSelected.splice(0, cardsSelected.length);

                                round = 2;
                            }, 1000);

                        }
                    }
                }
            }
        })
    }
}
// Victory message:
function victory(){
    let createDiv = document.createElement('div')
    gameScreen.appendChild(createDiv);
    createDiv.style.position = "absolute";
    createDiv.style.background = "#D0E09D";
    createDiv.style.color = "#927D6A";
    createDiv.style.width = "62%";
    createDiv.style.height = "67%";
    createDiv.style.textAlign = "center";
    createDiv.style.fontSize = "5rem";
    createDiv.innerHTML = "BRAVO !";
}


// Card:
let card = [
    "Bird", "Bone", "Cat", "Dog", "Fish", "Heart", "Snail", "Thunder",
]
let round = 2;

// LET:
let startButton = document.getElementById('startGame');
let cases = document.g

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
function cardSelect (){
    let cards = document.getElementsByClassName('cards');
    let cardsSelections = [];
    console.log(cards.length);

    for (let card of cards){
        card.addEventListener('click', function (){
        console.log('test');

            if (round !== 0) {

                if (card.classList.contains("false")) {
                    card.classList.remove("false");
                    card.classList.add("true");

                    cardsSelections.push(card.classList);
                    console.log(cardsSelections);
                    round--;
                }

                else if (round === 0){
                    if (cardsSelections[0] === cardsSelections[1]){

                    }
                }

            }



        })
    }

}

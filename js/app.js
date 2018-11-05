

/*
 * Create a list that holds all of your cards
 */


let cards = ["goya2.png", "goya2.png",
            "thanos.png", "thanos.png", 
            "stormTrooper.png", "stormTrooper.png",
            "joker.png", "joker.png",
            "deadpool.png", "deadpool.png",
            "spiderman2.png", "spiderman2.png",
            "ironman2.png", "ironman2.png", 
            "daredevil.png", "daredevil.png"];

let gameStarted = false;
let won = false;
let matchingPair = 0;
let clickBlocked = false;
cards = shuffle(cards);

// stores cards            
const deckOfCards = document.querySelector(".deck");  //ul class deck

//makes cards visible
showCards();

/*
Timer
*/

let time = 0;

const timer = setInterval(showTime, 1000);

function showTime(timer) {
    //console.log('working')
    if (!gameStarted || won) return;
    time++;
    let mins = Math.round(time / 60); // 1 not 01
    if (mins < 10) {
        mins = "0" + mins;
    }
    let seconds = time % 60;
    if(seconds < 10) {
        seconds = "0" + seconds;
    }


    //console.log(mins, " ", seconds);
    let minutesElem = document.getElementById('minutes');
    let secondsElem = document.getElementById('seconds');
    minutesElem.innerHTML = mins;
    secondsElem.innerHTML = seconds;
}
function resetTimer() {
    clearInterval(timer);
}

let clickedCards = [];

const moveCount = document.querySelector(".moves");
let moveCounter = 0;
function addMove() {
    moveCounter ++;
    moveCount.innerHTML = moveCounter;
    checkRating();
}

function checkRating() {

    if(moveCounter <= 18)
        return true;

    
    startIndex = moveCounter > 26 ? 0 : 1;

    document.querySelectorAll('.fa-star').forEach(function (item, index) {
        if (index > startIndex) item.classList.add('hide');
    });
}

//make function add reset timer

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function() {

    won = false;
    matchingPair = 0;
    time = 0;

    let cards1 = deckOfCards.children;
    cards = shuffle(cards)
    for (let i=0; i<cards1.length; i++) {
        cards1[i].classList.remove("open", "show");
        //create a function - do not repeat code?
        cards1[i].style.backgroundImage = `url(img/${cards[i]})`;
        cards1[i].style.backgroundRepeat = "no-repeat";  //should be done in css?
        cards1[i].style.backgroundPosition = "center";  //should be done in css?
        cards1[i].value = cards[i];
        
    }
    let minutesElem = document.getElementById('minutes');
    let secondsElem = document.getElementById('seconds');
    minutesElem.innerHTML = '00';
    secondsElem.innerHTML = '00';
    moveCounter = 0;
    moveCount.innerHTML = moveCounter;
    clickedCards = [];
    gameStarted = false;
    
    

    document.querySelectorAll('.fa-star').forEach(function (item, index) {
        item.classList.remove('hid');
    });
});

function showCards(){

    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundImage = `url(img/${cards[i]})`;
        card.style.backgroundRepeat = "no-repeat";  //should be done in css?
        card.style.backgroundPosition = "center";  //should be done in css?
        card.value = cards[i];
        deckOfCards.appendChild(card);
    

        listenForClick(card);
        }
}
    //make cards clickable with event - listen for click
    function listenForClick (card){
        card.addEventListener("click", e => {
            gameStarted = true;
            const clickedCard = e.target;
            if (!clickBlocked && clickedCard.classList.contains('card') && !clickedCard.classList.contains('open')) {
                clickedCard.classList.toggle('open');
                clickedCard.classList.toggle('show');
                addClickedCard(clickedCard);
            }
        
    
    });
}
 
    function addClickedCard(clickCard) {
        
        const previousCard = clickedCards[0];
        console.log('Im in');
        if (clickedCards.length === 1) {

            addMove();
            // console.log('something')

            if(previousCard.value != clickCard.value) {
                clickBlocked = true;
                setTimeout(function () {
                    clickBlocked = false;
                    previousCard.classList.remove("open", "show");
                    clickCard.classList.remove("open", "show");
                }, 1000);
            } else {
                matchingPair++;
                if(matchingPair * 2 === cards.length) {
                    won = true;
                    alert('You won!');
                }
            }
            
            clickedCards = [];
            
        }
        else {
            clickedCards.push(clickCard);
        }

}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
    




   
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

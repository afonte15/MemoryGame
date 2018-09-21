

/*
 * Create a list that holds all of your cards
 */


const cards = ["venom.png", "venom.png",
            "captainamerica.png", "captainamerica", 
            "cyclops.png", "cyclops.png",
            "storm.png", "storm.png",
            "groot.png", "groot.png",
            "hawkeye.png", "hawkeye.png",
            "ironman.png", "ironman.png", 
            "spiderman.png", "spiderman.png"];



// stores cards            
const deckOfCards = document.querySelector(".deck");  //ul class deck

//makes cards visible
showCards();



let clickedCards = [];

const moveCount = document.querySelector(".moves");
let moveCounter = 0;
function addMove() {
    moveCounter ++;
    moveCount.innerHTML = moveCounter;

}



const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function() {
    let cards = deckOfCards.children;
    for (let i=0; i<cards.length; i++) {
        cards.src[i].classList.remove("open", "show");  //added .src and it made the back of the cards appear
    }
    moveCounter = 0;
    moveCount.innerHTML = moveCounter;
    clickedCards = [];


});

/*
    1. define the global variable "counter"
    2. Define the vaiable with the start rate (that can be object {onestart: 5, twostars: 9})
    2.1. Define the 'stars' variable 
    3. Increase counter each time you click on two cards
    4. on the end of the game check how many moves have you made and set the stars
*/

//Display Cards where all li of cards use to be 
function showCards(){
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `<i class="${cards[i]}"<i>`; //template literal add the icons to the cards
        deckOfCards.appendChild(card);
    

        listenForClick(card);
        
}

}
    //make cards clickable with event - listen for click
    function listenForClick (card){
        card.addEventListener("click", e => {
            const clickedCard = e.target;
            if (clickedCard.classList.contains('card') && !clickedCard.classList.contains('open')) {
                clickedCard.classList.toggle('open');
                clickedCard.classList.toggle('show');
                addClickedCard(clickedCard);
            }
        
    
    });
// }



     /*
                0. Wrap all the functions below to the setTimeout
                1. Get the "i" element
                2. Compare two classnames (if we have 2 cards in the array)
                3. If they are the same, put the to 'open'
                4. else put to closed
                5. Clear the arraay
            */
 
    function addClickedCard(clickCard) {
        
        const previousCard = clickedCards[0];
        const secondCard = clickCard.children[0].classList[1];
        console.log(clickCard.children[0].classList[1]);
        if (clickedCards.length === 1) {
            //increase counter here
            addMove();
            console.log('something')
            card.classList.add("open", "show")
            clickedCards.push(src.card);
            let firstCardName = previousCard.children[0].classList[1];
            clickedCards = [];
            setTimeout(function() {
                if (secondCard !== firstCardName) {
                    previousCard.classList.remove("open", "show");
                    clickCard.classList.remove("open", "show");
                }
                
            }, 1000);
            
        }
        else {
            clickedCards.push(card);
        }

}

/*
Star Ratings 
*/

const starRating = document.querySelector(".stars");
function ratings() {

}



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

const cardArray = [
    {
        name: "fries",
        img:"./images/fries.png",
    },
    {
        name: "cheeseburger",
        img:"./images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img:"./images/hotdog.png",
    },
    {
        name: "ice-cream",
        img:"./images/ice-cream.png",
    },
    {
        name: "milkshake",
        img:"./images/milkshake.png",
    },
    {
        name: "pizza",
        img:"./images/pizza.png",
    },
    {
        name: "fries",
        img:"./images/fries.png",
    },
    {
        name: "cheeseburger",
        img:"./images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img:"./images/hotdog.png",
    },
    {
        name: "ice-cream",
        img:"./images/ice-cream.png",
    },
    {
        name: "milkshake",
        img:"./images/milkshake.png",
    },
    {
        name: "pizza",
        img:"./images/pizza.png",
    }

];


cardArray.sort(()=> 0.5 - Math.random()); // shuffle array

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];

const cardsWon=[];


function createBoard(){
    for (i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", `${i}`);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img");

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    
    // console.log(optionOneId + "/" + optionTwoId)

    if (optionOneId == optionTwoId){
      alert("you have clicked the same image")
      cards[optionOneId].setAttribute("src", "./images/blank.png");

    }
    if (cardsChosen[0] == cardsChosen[1]){
      alert("Matched");

      cards[optionOneId].setAttribute("src", "./images/white.png");
      cards[optionTwoId].setAttribute("src", "./images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);

    } else {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("Try again")
    }


    cardsChosen = [];
    cardsChosenIds = [];

    console.log(cards);
    console.log(cardArray);

    if (cards.length === (cardArray.length/2)) {
      resultDisplay.innerHTML = "Congratulations, you found them all";
    } else {
      
      resultDisplay.innerHTML = cardArray.length/2;
    }

    // if  (cardsWon.length === cardArray.length/2) {
    //     resultDisplay.textContent = 'Congratulations! You found them all!'
    //   }
}


function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    //console.log(cardArray)
    // console.log(cardArray[cardId].name);
    // console.log(cardId)
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute("src", cardArray[cardId].img);

    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 300);
        
    }
}


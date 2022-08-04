const squares = document.querySelectorAll(".square");
const mole = document.querySelector("mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

const moleSpeed = 700;
let result = 0;
let hitPosition;
let counterSeconds = 10;
let timerId = null;


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomPosition = squares[Math.floor(Math.random() * (squares.length))];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
   
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        // console.log("click")
        // console.log(square.id)
        // console.log(randomSquare.id)
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            square.classList.remove("mole");
            square.classList.add("moleHit");
            setTimeout(() => {
                
                square.classList.remove("moleHit");
            }, moleSpeed);
            hitPosition = null;
        }
    });
})

function moveMole() {
    // let timerId = null;
    timerId = setInterval(randomSquare,moleSpeed);
}

function timeCounter() {
    counterSeconds--
    timeLeft.textContent = counterSeconds;
    
    if (counterSeconds === 0) {
        clearInterval(countdownTimerId);
        clearInterval(timerId);
        alert("game over, your score is " + result)

        squares.forEach(square => { 
            square.classList.add("mole");
         })
        
    }
}

let countdownTimerId = setInterval(timeCounter, 1000);



moveMole();

//<a href="https://www.flaticon.com/free-icons/mole" title="mole icons">Mole icons created by Freepik - Flaticon</a>
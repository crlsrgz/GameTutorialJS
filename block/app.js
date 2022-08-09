const grid = document.querySelector('.grid')

const blockLength = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
let ballSpeed = 20;
const ballDiameter = 20; 


const scoreDisplay = document.querySelector(".score");

let score = 0

let timerid;
let xDirection = 2;
let yDirection = 2;
const userStart = [230,10];
let currentPosition = userStart;

const ballStart = [250,40];
let ballCurrentPosition = ballStart;

class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockLength, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockLength, yAxis + blockHeight];
    }
}


const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]


function createBlocks(){

    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block)
    }
}

createBlocks();

// User

const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

//draw user
function drawUser(){
    user.style.left = currentPosition[0] +"px";
    user.style.bottom = currentPosition[1] +"px";

}




//move user

function moveUser(event){
    switch(event.key){ // event.keyCOde:39
        case 'ArrowLeft': 
            if (currentPosition[0] > 0 ) {
                currentPosition[0] -= 10
                drawUser();            
            }
            break;

        case 'ArrowRight': 
            if (currentPosition[0] < (boardWidth - blockLength)){
                currentPosition[0] += 10
                drawUser();            
                
            }
            break;
    }
}

document.addEventListener("keydown", moveUser);

//draw ball

function drawBall(){
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}

//Ball

const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);


//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall();
    checkForCollision();
    // console.log(`x: ${ballCurrentPosition[0]}; y: ${ballCurrentPosition[1]}`)
}

function setBallSpeed(ballSpeed){
    
    timerid = setInterval(() => {
        moveBall()
    }, ballSpeed);
}
setBallSpeed(ballSpeed);

function checkForCollision() {
    //check for block collisions
    for (let i =  0; i < blocks.length; i++){
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
            ){
                const allBlocks = Array.from(document.querySelectorAll(".block"))
                allBlocks[i].classList.remove("block");
                blocks.splice(i, 1); //remove from array
                score++;
            scoreDisplay.innerHTML = score;
            console.log(score);
            console.log(ballSpeed);
            switch(score){
                case 2:                    
                    ballSpeed = ballSpeed + 20;
                    setBallSpeed(ballSpeed);
                break;
                
                case 6:
                    ballSpeed = ballSpeed + 35;
                    setBallSpeed(ballSpeed);
                break;
                case 10:
                    ballSpeed = ballSpeed + 35;
                    setBallSpeed(ballSpeed);
                break;
                case 14:
                    ballSpeed = ballSpeed + 35;
                    setBallSpeed(ballSpeed);
                break;

            }

            changeDirection();



        }
    }

    // check for user collisions 
    if (
        ((ballCurrentPosition[0]) > currentPosition[0] && ballCurrentPosition[0] < (currentPosition[0] + blockLength)) && 
        ((ballCurrentPosition[1] > currentPosition[1]) && (ballCurrentPosition[1] < currentPosition[1] + blockHeight))
        )
    {
        changeDirection();
    }

    //check for wall collisions
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||  ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||  ballCurrentPosition[0] <= (0)){        
        changeDirection();
    }
    //chech for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerid);
        scoreDisplay.innerHTML = "Game over";
        document.removeEventListener("keydown", moveUser);
    }


}




// function changeDirection(){
//     if(xDirection === 2 && yDirection === 2){
//         yDirection = -2
//         return
//     }
//     if(xDirection === 2 && yDirection === -2){
//         xDirection = -2
//         return
//     }
//     if(xDirection === -2 && yDirection === -2){
//         xDirection = 2
//         return
//     }
//     if(xDirection === -2 && yDirection === 2){
       
//         yDirection = -2
//         return
//     }
   
    
// }

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
      yDirection = -2
      return
    }
    if (xDirection === 2 && yDirection === -2) {
      xDirection = -2
      return
    }
    if (xDirection === -2 && yDirection === -2) {
      yDirection = 2
      return
    }
    if (xDirection === -2 && yDirection === 2) {
      xDirection = 2
      return
    }
  }
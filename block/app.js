const grid = document.querySelector('.grid')

const blockLength = 100;
const blockHeight = 20;


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










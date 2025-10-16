let GRID_SIZE = 20

function setup() {
    createCanvas(400, 400)
    strokeWeight(0.2)
}

function draw() {
    drawGrid()
}

function drawGrid() {
    for ( let x = 0 ; x < width ; x += 50) {
        fill(255, 255, clickGrid(x))
        rect(x, 0, 50, height)
    }
}

function clickGrid(x) {
    if ((mouseX > x && mouseX < x + 50) && mouseIsPressed) {
        return 0
    } else {
        return 255
    }
    
}
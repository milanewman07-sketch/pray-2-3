let GRID_SIZE = 20

function setup() {
    createCanvas(400, 400)
    strokeWeight(0.2)
}

function draw() {
    drawGrid()
}

function drawGrid() {
    let y = 0;
    for ( let x = 0 ; x < width ; x += 50) {
        square(x, y, 50)
    }
}
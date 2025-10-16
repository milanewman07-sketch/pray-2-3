
function setup() {
    createCanvas(400, 400)
    strokeWeight(0.2)
}

function draw() {
    drawGrid()
}

function drawGrid() {
    let y = 0;

    while ( y < height) {
        for ( let x = 0 ; x < width ; x += 50) {
            square(x, y, 50)
        }
        y += 50
    }
}
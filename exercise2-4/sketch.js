
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
        let count = 0
        for ( let x = 0 ; x < width ; x += 50) {
            if (count % 2 && count % 2) {
                fill(0)
            } else {
                fill(255)
            }
            square(x, y, 50)
            count++
        }
        y += 50
    }
}
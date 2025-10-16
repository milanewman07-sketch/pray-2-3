function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(255)
    fill(0, 0, 255)
    let x = 10

    while ( x <= mouseX) {
        circle(x, width / 2, 20)
        x += 20
    }
}
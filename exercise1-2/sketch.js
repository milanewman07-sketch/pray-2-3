function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(255)
    
    let x = 10
    let x2 = width - 10

    while ( x2 >= mouseX) {
        fill(255)
        circle(x2, width / 2, 20)
        x2 -= 20
    }

    while ( x <= mouseX) {
        fill(0, 0, 255)
        circle(x, width / 2, 20)
        x += 20
    }


}
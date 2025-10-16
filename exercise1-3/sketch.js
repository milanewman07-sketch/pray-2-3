function setup() {
    createCanvas(600, 600)

    let y = 0;
    strokeWeight(3)

    while (y < height) {
        line(width, 0, 0, y)
        y += 10
    }

    while (y >= 0) {
        stroke(255, 0, 255)
        line(width, height, 0, height - y)
        y -= 10
    }

    while (y <= width) {
        stroke(0, 255, 255)
        line(width / 2, height / 2, width, y)
        y += 10
    }


}
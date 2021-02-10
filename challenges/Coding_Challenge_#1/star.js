class Star {

    static speed = 10;
    constructor(w, h) {
        this.x = map(Math.random(), 0, 1, -w / 2, w / 2);
        this.y = map(Math.random(), 0, 1, -h / 2, h / 2);
        this.z = map(Math.random(), 0, 1, 0, w);
        this.mapWidth = w;
        this.mapHeight = h;
    }

    update() {
        if (this.z < 1) {
            this.z = map(Math.random(), 0, 1, 0, this.mapWidth);
        }
        else {
            this.z = this.z - Star.speed;
        }
    }

    show() {

        fill(255);
        noStroke();

        let nx = map(this.x / this.z, 0, 1, 0, this.mapWidth);
        let ny = map(this.y / this.z, 0, 1, 0, this.mapHeight);
        let r = map(this.z, 0, this.mapWidth, 8, 0);
        ellipse(nx, ny, r, r);
    }
}
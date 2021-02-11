class Cell {

    static CellScale = 10;
    constructor(i, j) {

        this.i = i;
        this.j = j;

        this.walls = {
            top: new Wall(true, 0, 0, 1, 0),
            right: new Wall(true, 1, 0, 1, 1),
            bottom: new Wall(true, 0, 1, 1, 1),
            left: new Wall(true, 0, 0, 0, 1)
        }
    }


    static setCellScale(scl) {
        this.CellScale = scl;
    }

    show() {

        let x = this.i * Cell.CellScale;
        let y = this.j * Cell.CellScale;

        stroke(255);
        noFill();

        for (let dir in this.walls) {
            if (this.walls[dir].exists) {
                let wall = this.walls[dir].offset.map(e => e * Cell.CellScale);
                let x1 = x + wall[0];
                let y1 = y + wall[1];
                let x2 = x + wall[2];
                let y2 = y + wall[3];

                line(x1, y1, x2, y2);
            }
        }
    }
}
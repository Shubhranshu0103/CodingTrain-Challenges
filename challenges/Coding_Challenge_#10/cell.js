class Cell {

    static CellScale = 10;
    constructor(i, j, cellColor) {

        this.i = i;
        this.j = j;

        this.walls = {
            top: new Wall(true, 0, 0, 1, 0),
            right: new Wall(true, 1, 0, 1, 1),
            bottom: new Wall(true, 0, 1, 1, 1),
            left: new Wall(true, 0, 0, 0, 1)
        }

        this.visited = false;
        if (!cellColor)
            this.fillColor = [0, 0, 0];
        else
            this.fillColor = cellColor;
    }


    static setCellScale(scl) {
        this.CellScale = scl;
    }

    show() {

        let y = this.i * Cell.CellScale;
        let x = this.j * Cell.CellScale;

        strokeWeight(2);
        stroke(255);

        noFill();

        for (let dir in this.walls) {
            if (this.walls[dir].exists) {
                let wall = this.walls[dir].offset;
                let x1 = x + wall[0] * Cell.CellScale;
                let y1 = y + wall[1] * Cell.CellScale;
                let x2 = x + wall[2] * Cell.CellScale;
                let y2 = y + wall[3] * Cell.CellScale;

                line(x1, y1, x2, y2);
            }
        }

        noStroke();
        fill(...this.fillColor);
        rect(x, y, x + Cell.CellScale, y + Cell.CellScale);


    }
}
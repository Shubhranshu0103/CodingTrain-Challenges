class Grid {

    constructor(w, h, s) {
        this.width = w;
        this.height = h;
        this.gridScale = s;
        Cell.setCellScale(s);
        this.createGrid();

    }

    createGrid() {

        this.rows = floor(this.height / this.gridScale);
        this.cols = floor(this.width / this.gridScale);
        this.grid = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let cell = new Cell(i, j);
                this.grid.push(cell);
            }
        }
    }

    setGridScale(scl) {
        this.gridScale = scl;
        Cell.setCellScale(scl);
        this.createGrid();
    }
    show() {

        this.grid.forEach(e => { e.show() });
    }
}
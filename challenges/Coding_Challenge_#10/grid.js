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
        this.grid = Array.from(Array(this.rows), () => new Array(this.cols));
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = new Cell(i, j);


            }
        }


    }

    setGridScale(scl) {
        this.gridScale = scl;
        Cell.setCellScale(scl);
        this.createGrid();
    }

    isValidIndex(i, j) {
        return !(i < 0 || i >= this.rows || j < 0 || j >= this.cols);
    }

    getNeighbours(i, j) {

        let neighbours = [];

        let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        for (let dir of dirs) {
            let x = i + dir[0];
            let y = j + dir[1];
            if (this.isValidIndex(x, y))
                neighbours.push(this.grid[x][y]);
        }

        return neighbours;
    }

    pickRandomUnvisitedNeighbour(i, j) {

        let unvisitedNeighbours = this.getNeighbours(i, j).filter(e => !e.visited);

        if (unvisitedNeighbours.length == 0)
            return undefined;

        return unvisitedNeighbours[floor(random() * unvisitedNeighbours.length)];

    }

    removeWallBetween(cellA, cellB) {

        //left neighbour
        if (cellA.j - cellB.j == 1) {
            cellA.walls.left.exists = false;
            cellB.walls.right.exists = false;
        }
        //right neighbour
        else if (cellA.j - cellB.j == -1) {

            cellA.walls.right.exists = false;
            cellB.walls.left.exists = false;
        }
        //top neighbour
        else if (cellA.i - cellB.i == 1) {
            cellA.walls.top.exists = false;
            cellB.walls.bottom.exists = false;
        }
        //bottom neighbour
        else if (cellA.i - cellB.i == -1) {
            cellA.walls.bottom.exists = false;
            cellB.walls.top.exists = false;
        }
    }



    show() {

        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.grid[i][j].show();

    }
}
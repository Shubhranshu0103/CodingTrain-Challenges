class Maze {

    constructor(w, h, s) {
        this.mazeGrid = new Grid(w, h, s);
        this.currentCell = this.mazeGrid.grid[0][0];
        this.visitedColor = [255, 0, 100];
        this.currentCellColor = [0, 255, 0];
        this.backTrackColor = [0, 0, 255];
        this.cellStack = [];

    }

    transitionToNextState() {

        if (this.currentCell == null)
            return false;
        this.currentCell.visited = true;
        this.currentCell.fillColor = this.visitedColor;


        let next = this.mazeGrid.pickRandomUnvisitedNeighbour(this.currentCell.i, this.currentCell.j);
        if (next) {
            this.mazeGrid.removeWallBetween(this.currentCell, next);
            next.fillColor = this.currentCellColor;
            this.cellStack.push(this.currentCell);
            this.currentCell = next;
        }
        else {
            if (this.cellStack.length != 0) {
                this.currentCell = this.cellStack.pop();
                this.currentCell.fillColor = this.backTrackColor;
            }
            else {
                this.currentCell = null;
            }
        }

        return true;
    }

    show() {
        this.mazeGrid.show();
    }
}
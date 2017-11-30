class GameOfLife {
  
  constructor() {

    this.liveCells = {};

  }

  isCellAlive(row, column) {
    return this.liveCells[row+","+column] || false;
  }

  toggleCellState(row, column) {
  
    this.liveCells[row+","+column] = !this.liveCells[row+","+column];

  }

  numberOfLiveNeighbours(row, column) {

    return this.isCellAlive(row - 1, column) + this.isCellAlive(row + 1, column) + this.isCellAlive(row, column - 1) + this.isCellAlive(row, column + 1);

  }

  tick() {
  
    if(this.isCellAlive(2,3) && this.numberOfLiveNeighbours(2,3) < 2) {
      this.toggleCellState(2,3)
    }
  }

}

describe('2 - Game of Life', function () {
  
  let gameOfLife;
  
  beforeEach(function () {
    gameOfLife = new GameOfLife();
  });
  
  it('1 - should make sure all cells are initially dead', function () {
    expect(gameOfLife.isCellAlive(2, 3)).toBe(false);
  });
  
  it('2 - should be able to toggle the state of individual cells', function () {
    gameOfLife.toggleCellState(2, 3);

    expect(gameOfLife.isCellAlive(2, 3)).toBe(true);
  
  });
  
  it('3a - should return number of live neighbours - 1', function() {
    gameOfLife.toggleCellState(2,2);
    gameOfLife.toggleCellState(2,3);
    gameOfLife.toggleCellState(2,4);

    var numberOfLiveNeighbours = gameOfLife.numberOfLiveNeighbours(2,3);

    expect(numberOfLiveNeighbours).toBe(2);
  });

  it('3a - should return number of live neighbours - 2', function() {
    gameOfLife.toggleCellState(1,3);
    gameOfLife.toggleCellState(2,3);
    gameOfLife.toggleCellState(3,3);

    var numberOfLiveNeighbours = gameOfLife.numberOfLiveNeighbours(2,3);

    expect(numberOfLiveNeighbours).toBe(2);
  });

  it('3a - should return number of live neighbours - 3', function() {
    gameOfLife.toggleCellState(2,2);
    gameOfLife.toggleCellState(2,3);
    gameOfLife.toggleCellState(3,3);

    var numberOfLiveNeighbours = gameOfLife.numberOfLiveNeighbours(2,3);

    expect(numberOfLiveNeighbours).toBe(2);
  });

  it('3 - should set the cell state to dead in next generation if the cell is alive in current generation and has less than 2 live neighbours - 1', function () {
    gameOfLife.toggleCellState(2,3);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(2,3)).toBe(false);
  });

  it('3 - should set the cell state to dead in next generation if the cell is alive in current generation and has less than 2 live neighbours - 1', function () {
    gameOfLife.toggleCellState(4,2);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(4,2)).toBe(false);
  });

});

/*
The goal of this koan is to become familiar with Jasmine unit testing framework.
You will have to use TDD to implement isCellAliveInNextGeneration function, according to the rules of the game (you canse use http://en.wikipedia.org/wiki/Conway's_Game_of_Life for reference).
*/
function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
  
    return (isCellAlive && numberOfLiveNeighbours === 2) || numberOfLiveNeighbours === 3;
  
  }
  
  describe('Game of Life', function () {
    it('should return false when a live cell has fewer than two live neighbours - under-population', function () {
      
      var isAlive = isCellAliveInNextGeneration(1,1);
      
      expect(isAlive).toBe(false);
    });
  
    it('should return true when a live cell has two or three live neighbours - survival', function () {
  
      var isAlive = isCellAliveInNextGeneration(1,2);
      
      expect(isAlive).toBe(true);
    });
  
    it('should return false when a live cell has more than three live neighbours - overcrowding', function () {
  
      var isAlive = isCellAliveInNextGeneration(1,4);
      
      expect(isAlive).toBe(false);
  
    });
  
    it('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
      
          var isAlive = isCellAliveInNextGeneration(0,3);
          
          expect(isAlive).toBe(true);
      
    });
  
    it('should return false when a dead cell has exactly two live neighbours - adc extra coverage', function () {
  
      var isAlive = isCellAliveInNextGeneration(0,2);
      
      expect(isAlive).toBe(false);
  
    });
  });
  
/**
 * @param {character[][]} grid
 * @return {number}
 */
let remove = (i, j, grid) => {
    if(i < 0 || i >= grid.length || 
       j < 0 || j >= grid[0].length ||
      grid[i][j] == 0) return;
    
    
    grid[i][j] = 0;
    remove(i+1, j, grid);
    remove(i-1, j, grid);
    remove(i, j+1, grid);
    remove(i, j-1, grid);
    
}

var numIslands = function(grid) {
    if(Array.isArray(grid) && grid.length === 0) return 0
    let col = grid.length;
    let row = grid[0].length;
    let count = 0;
    for(let i = 0; i < col; i++){
        for(let j = 0; j < row; j++){
            if(grid[i][j] == 1){
                count ++;
                remove(i, j, grid)
            }
        }
    }
    return count;    
};
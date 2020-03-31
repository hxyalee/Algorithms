/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let removeIsland = (i,j) => {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0)
            return;
        grid[i][j] = 0;
        removeIsland(i + 1, j) // right
        removeIsland(i - 1, j) // left
        removeIsland(i, j + 1) // up
        removeIsland(i, j - 1) // down
    }
    
    
    let count = 0;
    // row
    for(let i = 0; i < grid.length; i++){
        // column
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                count ++;
                removeIsland(i, j);
            }
        }
    }
    return count;
};
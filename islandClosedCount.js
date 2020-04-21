/**
 * @param {number[][]} grid
 * @return {number}
 */

let removeIsland = (i, j, grid, isEdge) => {
    if(i < 0 || i >= grid.length ||
       j < 0 || j >= grid[0].length || grid[i][j] == 1) return;
    
    grid[i][j] = 1
    removeIsland(i + 1, j, grid, isEdge);
    removeIsland(i - 1, j, grid, isEdge);
    removeIsland(i, j + 1, grid, isEdge);
    removeIsland(i, j - 1, grid, isEdge);
    // edge is not closed hence revert to original state
    if(i == 0 || i == grid.length - 1 || 
       j == 0 || j == grid[0].length - 1) isEdge[0] = 1;

}



var closedIsland = function(grid) {
    if(Array.isArray(grid) && grid.length === 0) return 0;
    
    let col = grid.length;
    let row = grid[0].length;
    let count = 0;
    
    for(let i = 0; i < col; i++){
        for(let j = 0; j < row; j++){
            if(grid[i][j] == 0){
                let isEdge = [0]
                removeIsland(i, j, grid, isEdge);
                if(isEdge[0] == 0) count ++;
            }
        }
    }
    return count;
};
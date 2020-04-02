/**
 * @param {number[][]} grid
 * @return {number}
 */
 // get the max area of an island of a grid
var maxAreaOfIsland = function(grid) {
    
    let area = 0;
    
    let countArea = (i,j) => {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0)
            return;
        area += 1;
        grid[i][j] = 0;
        countArea(i + 1, j) // right
        countArea(i, j + 1) // up
        countArea(i - 1, j) // left
        countArea(i, j - 1) // down
        return area;
        
    }
    
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                area = 0;
                countArea(i,j)
                count = Math.max(area, count);
            }
        }
    }
    return count
};
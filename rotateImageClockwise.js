/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(matrix == null) return;
    let col = matrix.length
    let row = matrix[0].length
    for(let i = 0; i < col; i++){
        for(let j = i; j < row; j ++){
            if(j == i) continue;
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp
        }
    }
    
    for(let i = 0; i < col; i++){
        for(j = 0, n = row - 1; j < row; j ++, n --){
            if(j >= n) break;
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n];
            matrix[i][n] = tmp
        }
    }
};
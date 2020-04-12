/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let search = (i,j, board, word, idx, seen) => {
    if(word.length === idx) return true
        
    if(i < 0 || i >= board.length ||
       j < 0 || j >= board[0].length || 
       board[i][j] != word.charAt(idx) || seen[i][j]) return false
    
    seen[i][j] = true
    
    if( 
        search(i + 1, j, board, word, idx + 1, seen) ||
        search(i - 1, j, board, word, idx + 1, seen) ||
        search(i, j + 1, board, word, idx + 1, seen) ||
        search(i, j - 1, board, word, idx + 1, seen)
    ) return true
    
    seen[i][j] = false
    return false;
    
}


var exist = function(board, word) {
    if(board.length === 0) return false
    let column = board.length;
    let row = board[0].length;
    let seen = new Array(board.length)
    for(let i = 0; i < seen.length; i ++) seen[i] = new Array(board[0].length);
    
    for(let i = 0; i < column; i++){
        for(let j = 0; j < row; j++){
            if(board[i][j] === word[0] && search(i, j, board, word, 0, seen)){
                return true
            }
        }
    }
    return false
};
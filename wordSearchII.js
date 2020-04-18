/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
let search = (board, i, j, word, idx, seen) => {
    if(word.length === idx) return true
    if(i < 0 || i >= board.length || 
       j < 0 || j >= board[0].length || board[i][j] != word.charAt(idx) || seen[i][j]) return false
    seen[i][j] = true
    
    if(search(board, i + 1, j, word, idx + 1, seen) || 
       search(board, i - 1, j, word, idx + 1, seen) ||
       search(board, i, j + 1, word, idx + 1, seen) ||
       search(board, i, j - 1, word, idx + 1, seen)) return true;
    
    seen[i][j] = false
    return false;
    
    
}

var findWords = function(board, words) {
    if(board == null) return [];
    let row = board[0].length;
    let col = board.length;
    let output = new Array();
    for(word of words){
        let flag = false
        let seen = new Array(board.length)
        for(let i = 0; i < seen.length; i ++) 
            seen[i] = new Array(board[0].length);
        for(let i = 0; i < col; i++){
            for(let j = 0; j < row; j++){
                if (word.charAt(0) == board[i][j]){
                    if(search(board, i, j, word, 0, seen)) {
                        output.push(word);
                        flag = true
                        break;
                    }
                }
                if(flag) break; 
            }
            if(flag) break;            
        }
    }
    return output;
};
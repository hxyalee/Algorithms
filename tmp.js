/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
let search = (board, i, j, word, idx) => {
    if(i < 0 || i >= board.length || 
       j < 0 || j >= board[0].length || board[i][j] != word.charAt(idx)) return false
    tmp = board[i][j]
    board[i][j] = 0
    
    if(search(board, i + 1, j, word, idx + 1) || 
       search(board, i - 1, j, word, idx + 1) ||
       search(board, i, j + 1, word, idx + 1) ||
       search(board, i, j - 1, word, idx + 1)) return true;
    
       
    board[i][j] = tmp;
    return false;
    
    
}

var findWords = function(board, words) {
    if(board == null) return [];
    let row = board[0].length;
    let col = board.length;
    let output = new Array();
    for(word of words){
        for(let i = 0; i < col; i++){
            for(let j = 0; j < row; j++){
                if (word.charAt(0) == board[i][j]){
                    if(search(board, i, j, word, 0)) {
                        output.append(word)
                        console.log(word)
                        break;
                    }
                }
                
                
                
            }
            
            
            
        }
        
        
        
    }
    return output;
};

console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
["oath","pea","eat","rain"]))
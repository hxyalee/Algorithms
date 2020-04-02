/**
 * @param {character[][]} board
 * @return {boolean}
 */
// iintuitive way is to perform a for loop to check 
// row, column, and boxes.
// However, you can use a string and set to see if the value has been 
// seen at certain position.
var isValidSudoku = function(board) {
    let set = new Set();
    // column
    for(let i = 0; i < board.length; i++){
        // row
        for(let j = 0; j < board.length; j++){
            if(board[i][j] != "."){
                if(
                    set.has(board[i][j] + 'at col' + i) ||
                    set.has(board[i][j] + 'at row' + j) ||
                    set.has(board[i][j] + 'at box' + Math.floor(i/3) + '-' + Math.floor(j/3))
                  
                  )
                    return false;
                
                else{
                    set.add(board[i][j] + 'at col' + i);
                    set.add(board[i][j] + 'at row' + j);
                    set.add(board[i][j] + 'at box' + Math.floor(i/3) + '-' + Math.floor(j/3));
                }
            }
        }
    }
    return true;
    
    
    
    
    
    /*
    let checkRowColumn = (arr) => {
        let s = new Set();
        for(let i = 0; i < arr.length; i ++){
            if(s.has(arr[i])){
                return false;
            }else if (arr[i] != "."){
                s.add(arr[i])
            }
        }
        return true;
    }
    
    let checkBox = (box) => {
        let s = new Set();
        for(let i = 0; i < box.length; i ++){
            for(let j = 0; j < box[0].length; j++){
                if(s.has(box[i][j])){
                    return false;
                }else if (box[i][j] != "."){
                    s.add(box[i][j])
            }
            }
        }
        return true;
    }
    
    for(let i = 0; i < board.length; i ++){
        console.log(board[i])
        if(!checkRowColumn(board[i])){
            return false
        }
        let arr = new Array()
        for(let j = 0; j < board[i].length; j++){
            arr.push(board[j][i]);
        }
        console.log(arr)
        if(!checkRowColumn(arr)){
            return false;
        }
    }
    let boxEnd= 2;
    let boxStart = 0
    for(let i = 0; i < board.length; i++){
        if(i == boxEnd){
            boxStart = boxEnd + 1;
            boxSize += 3;
        }
        let box = new Array();
        for(let j = i; j < boxEnd)
    }
    return true;
    */
};
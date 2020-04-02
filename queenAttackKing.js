/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
 // get the number of queens that can attack the king 
var queensAttacktheKing = function(queens, king) {
    let seen = new Array();
    let answer = new Array();
    for(let i = 0; i < 8; i ++){
        seen.push(new Array(8));
    }
    // set all queens in the chessboard to be marked seen
    for(queen of queens){
        seen[queen[0]][queen[1]] = true
    }
    // -1 is left or down 0 is in place and 1 is up or right
    let directions = [-1,0,1]
    for(dx of directions){
        for(dy of directions){
            let x = king[0];
            let y = king[1];
            // stagnant mode
            if(dx == 0 && dy == 0){
                continue;
            }
            // bound checking
            while(x + dx >= 0 && x + dx < 8 && y + dy >= 0 && dy + y < 8){
                x += dx;
                y += dy;
                // if seen, break since we dont want to go to that direction anymore
                if(seen[x][y]){
                    answer.push([x,y]);
                    break;
                }
            }    
        }
    }
    return answer
};
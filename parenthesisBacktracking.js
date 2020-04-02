/**
 * @param {number} n
 * @return {string[]}
 */
// permutation of valid parentheses
// backtracking
var generateParenthesis = function(n) {
    let arr = new Array();
    backtrack(arr, '', 0, 0, n);
    return arr;
};

let backtrack = (arr, current_string, opens, closes, max) => {
    if(current_string.length === max * 2){
        arr.push(current_string);
        return;
    }
    if(opens < max){
        backtrack(arr, current_string + '(', opens + 1, closes, max)
    }
    if(closes < opens){
        backtrack(arr, current_string + ')', opens, closes + 1, max)
        
    }
}
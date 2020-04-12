/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let open = 0;
    let ans = new String();
    S = S.split('');
    for(s of S){
        if(s == '(' && open ++ > 0) ans += s
        if(s ==')' && open -- > 1) ans += s
    }
    return ans
};
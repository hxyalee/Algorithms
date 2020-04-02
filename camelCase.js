/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */

var isLower = (char) => {
    if(char >= 'a' && char <= 'z'){
        return true;
    }
    return false;
}
var isUpper = (char) => {
    if(char >= 'A' && char <= 'Z'){
        return true;
    }
    return false;
}


// two pointer approach
// if match increment both pointers
// if not and if queries is a lower increment queries
// otherwise return false

var camelMatch = function(queries, pattern) {
    let result = new Array();
    queries.forEach(query => {
        result.push(isMatch(query, pattern));
    })
    return result;    
};


var isMatch = (s, p) => {
    s = s.split('');
    p = p.split('')
    let i = 0;
    let j = 0;
    while(i < s.length){
        if(s[i] === p[j]){
            i++;
            j++;
        } else{
            if(isUpper(s[i])){
                return false
            }else{
                i ++;
            }
        }
    }
    if (j ===p.length){
        return true;
    }
    return false;
}
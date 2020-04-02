/**
 * @param {string} s
 * @return {string}
 */
 // removing parenthesis so that its in a valid form.
 // each parenthesis  needs to have matching braces.
 // have an open counter and then increment whenever you see a opening brace.
 // if you see a closing brace and ur open is 0, you want to ignore that. 
 // Remove the ending opening braces since there may be excessses.
var minRemoveToMakeValid = function(s) {
    s = s.split('')
    let newStr = new Array();
    let open = 0;
    for(char of s){
        if(char == '('){
            open ++;
        } else if (char == ')'){
            if(open === 0){
                continue
            }
            open--;
        }
        newStr.push(char);
    }
    if(open === 0){
        return newStr.join('')
    }
    let end = newStr.length - 1;
    let str = new Array();
    for(let i = end; i >= 0; i--){
        if(newStr[i] == '(' && open > 0){
            open --;
            continue;
        }
        str.unshift(newStr[i]);
    }
    return str.join('')
};
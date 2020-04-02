/**
 * @param {string} s
 * @return {string}
 */
 // reverse strings inside the parenthesis
var reverseParentheses = function(s) {
    let stack = new Array();
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(s[i] != ")")
            stack.push(s[i])
        else{
            let c = stack.pop()
            console.log(c)
            let queue = [];
            while(c != '('){
                queue.push(c)
                c = stack.pop()
            }
            while(queue.length > 0){
                let v = queue.shift();
                stack.push(v);
            }
        }
    }
    
    return stack.join('')
    
};
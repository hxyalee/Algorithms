/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(s.length <= 0) return ''
    s = s.split('')
    let letters = new Array();
    let numbers = new Array();
    let idx = 0;
    let res = ''
    while(idx < s.length){
        // case where we need to get the integer
        if(parseInt(s[idx])){
            let count = 0;
            while('0' <= s[idx] && s[idx] <= '9'){
                count = 10 * count + parseInt(s[idx]);
                idx ++;
            }
            numbers.push(count)
        } else if (s[idx] == '['){
            letters.push(res)
            res = ''
            idx += 1
        } else if (s[idx] == ']'){
            let tmp = letters.pop();
            let count = numbers.pop();
            for(let i = 0; i < count; i ++){
                tmp += res
            }
            res = tmp;
            idx += 1;
        } else {
            res = res += s[idx]
            idx += 1
        }
    }
    return res
    
};
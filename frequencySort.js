/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Object();
    for(let i =0; i < s.length; i++){
        if(s.charAt(i) in map) map[s.charAt(i)] += 1;
        else map[s.charAt(i)] = 1
    }
    let arr = new Array();
    for(key in map){
        arr.push([key, map[key]])
    }
    arr.sort((a,b) => b[1] - a[1]);
    let ans = new String();
    for(e of arr){
        for(let i = 0; i < e[1]; i++) ans = ans.concat(e[0])
    }
    return ans
};
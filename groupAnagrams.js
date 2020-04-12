/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    let output = new Map();
    let ans = new Array();
    for(word of strs){
        let tmp = word.split('');
        tmp.sort();
        tmp = tmp.join('')
        if(output.has(tmp)) output.get(tmp).push(word)
        else output.set(tmp, [word])
    }
    for(key of output.keys()){
        ans.push(output.get(key))
    }
    return ans
};
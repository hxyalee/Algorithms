/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let s1 = new Object();
    let s2 = new Object();
    let count = 0;
    // create an object of element and count of the element
    for(let i = 0; i < s.length; i++){
        if(s[i] in s1)
            s1[s[i]] ++;
        else
            s1[s[i]] = 1;
    }

    for(let i = 0; i < t.length; i++){
        if(t[i] in s2){
            s2[t[i]] ++;
        }else{
            s2[t[i]] = 1;
        }
    }
    // get the number of changes you need for each letter in s1 for s2 to be an anagram
    for(key in s1){
        if(s1[key] <= s2[key])
            continue
        else{
            if(key in s2)
               count += (s1[key] - s2[key]);
            else
                count += s1[key]
            
        }
    }
    return count;   
};
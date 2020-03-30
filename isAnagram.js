var isAnagram = function(s, t) {
    let s1 = new Object();
    for(char of s){
        if(char in s1){
            s1[char]++;
        }else{
            s1[char] = 1;
        }
    }
    for(char of t){
        if(char in s1){
            s1[char]--;
            if(s1[char] == 0){
                delete s1[char];
            }
        }else{
            return false
        }
    }
    if(Object.keys(s1).length > 0){
        return false
    }
    return true
};
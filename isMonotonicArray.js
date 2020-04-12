/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length < 2) return true
    let isInc = true;
    let isDec = true;
    
    for(let i = 1; i < A.length; i++){
        if(A[i - 1] > A[i]) isInc = false
        else if(A[i - 1] < A[i]) isDec = false
    }
    
    
    return isInc || isDec
};
var peakIndexInMountainArray = function(A) {
    let i = 0;
    let j = A.length - 1;
    while(i < j){
        let mid = i + Math.floor((j - i) / 2)
        if(A[mid] < A[mid + 1]){
            i = mid + 1;
        } else {
            j = mid
        }
    }
    return i;    
};
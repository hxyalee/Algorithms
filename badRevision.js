/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    let search = (lo,hi) => {
        let mid = Math.floor(lo + (hi - lo) / 2);

        let prev = mid - 1;
        // if previous is good then the mid must be bad
        if(!isBadVersion(prev) && isBadVersion(mid)){
            return mid
        }else if(isBadVersion(mid) && isBadVersion(prev)){
            return search(lo, mid - 1)
        } else {
            return search(mid + 1, hi)
        }
    }
    
    return function(n) {
        let lo = 0;
        let hi = n;
        return search(lo, hi)
    };
};



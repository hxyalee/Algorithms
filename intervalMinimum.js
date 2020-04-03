/**
 * @param {number[][]} intervals
 * @return {number}
 */

// [[1,2],[2,3],[1,3],[3,4]]
/*
    end = 2
    i[i][0] = 2
    2 < 2? false
    
    end = 3
    i[i][0] = 1
    1 < 3? true
    count ++
*/
// remove minimum number of intervals 
// sort by ending time
var eraseOverlapIntervals = function(intervals) {
    
    if(intervals.length <= 1){
        return 0;
    }
    
    intervals.sort((a,b) => a[1] - b[1])
    console.log(intervals)
    let count = 0;
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        // if there is overlap
        // that is, if the previous end is greater than the current start
        // this will work because the array was sorted by ending point
        if(intervals[i][0] < end){
            count += 1;
        }else{
            end = intervals[i][1];
        }
    }
    return count;
    
};
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1){
        return intervals;
    }
    intervals.sort((a,b) => a[0] - b[0]);
    
    let end = intervals[0];
    let ret = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++){
        // if the current interval overlaps
        // that is, if the starting time of the current
        // is smaller than the end time of the previous
        if(intervals[i][0] <= end[1]){
            if(end[1] < intervals[i][1]){
                end[1] = intervals[i][1];
                //  merged[merged.length - 1][1] = end[1]       
            }
        }else{
            ret.push(intervals[i])
            end = intervals[i];    

        }
        
    }
    return ret;
};
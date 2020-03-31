/*
    9 - 5
    set of meeting times
   9 - 5
   
   10-11, 12-14:30, 14-15:30 
    [9:00 - 10:00,11 - 12, 15:30 - 17:00]
    [1000,1100][1200,1430]
    [[900, 1000], [1100,1200] ...]
    10 - 11, 12 - 15:30
    
*/



let solution = (arr) => {
    if(Array.isArray(arr) && arr.length == 0){
        return [];
    }
    
    arr.forEach(element => {
        let interval = element.split('-');
        for(let time of interval){
            let tmp = time.split(':');
            time = tmp.join(''); 
            time = parseInt(time)
        }

    })
    
    
     
    arr.sort((a,b) => a[0] - b[0]);
    
    let end = arr[0];
    let merged = [[arr[0]]];
    

    
    for(let i = 1; i < arr.length; i++){
        // current interval overlaps
        // starting time of the current
        // is smaller than the ending time of previous
        if(arr[i][0] <= end[1]){            
            if(end[1] < arr[i][1]){         
                end = arr[i]  
                merged[merged.length - 1][1] = end[1]       
            }
        }else{
            merged.push([arr[i]]);
            end = arr[i];
        }
    }
    
    
    console.log(merged)
    
    let intervals = new Array();
    let start = 900;
    for(let i = 0; i <= merged.length; i++){
        if(merged[i][0] > start){
            result.push([start, merged[i][0]]);
            start = merged[i][1]
        }
    }

    
    if(merged(merged.length - 1)[1] < 1700){
        intervals.push([merged[merged.length - 1], [1700]])
    }
    
    return intervals;
}

solution(["9:00 - 10:00", "11:00 - 12:00", "15:30 - 17:00"])
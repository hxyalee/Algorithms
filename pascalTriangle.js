/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows <= 0) return [];
    let triangle = new Array();
    triangle.push([1])
    for(let i = 1; i < numRows; i++){
        let prev = triangle[triangle.length - 1]
        let sub = new Array(i + 1);
        sub[0] = 1;
        sub[i] = 1;
        for(let j = 1; j < i; j ++){
            sub[j] = prev[j - 1] + prev[j]
        }
        triangle.push(sub)
    }
    return triangle
    
};
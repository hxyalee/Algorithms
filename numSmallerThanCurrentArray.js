/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    s = Array.from(nums).sort((a,b) => b - a)
    let map = new Map(s.map((n,idx) => [n, s.length - idx - 1 ]))
    console.log(map)
    return nums.map(n => map.get(n))
};
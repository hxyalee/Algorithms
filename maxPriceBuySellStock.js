/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Math.pow(2,31) - 1;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice)
            minPrice = prices[i]
        else if(prices[i] - minPrice > maxProfit)
            maxProfit = prices[i] - minPrice
    }
    return maxProfit
};
var fib = function(N) {
    if(N ===0) return 0;
    let memo = new Array(N)
    memo[1] = 1;
    memo[2] = 1;
    for(let i = 3; i < N + 1; i ++){
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[N]
};
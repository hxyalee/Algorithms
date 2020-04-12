class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # m is row n is col
        dp = [[0 for x in range(m)] for y in range(n)]
        # Since there are only one way to get to the edges (right and down)
        # initialise them to 1
        for i in range(m):
            dp[0][i] = 1
        for i in range(n):
            dp[i][0] = 1
        # Number of ways to get to point x must be upper box times left box
        for i in range(1,n):
            for j in range(1,m):
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
                
        return dp[n - 1][m - 1]
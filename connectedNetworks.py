class Solution:
    def countServers(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0
        col = len(grid)
        row = len(grid[0])
        count = 0
        columns = [0 for i in range(col)]
        rows = [0 for i in range(row)]
        for i in range(col):
            for j in range(row):
                if(grid[i][j] == 1):
                    columns[i] += 1
                    rows[j] += 1
        for i in range(col):
            for j in range(row):
                if(grid[i][j] == 1 and (rows[j] > 1 or columns[i] > 1)):
                    count += 1
                    
        return count
    
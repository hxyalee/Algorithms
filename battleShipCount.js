class Solution:
    def countBattleships(self, board: List[List[str]]) -> int:
        if not board:
            return 0
        row = len(board[0])
        col = len(board)
        count = 0
        i = 0
        j = 0
        for i in range (col):
            for j in range (row):
                if(board[i][j] == 'X' and 
                   (i == 0 or board[i - 1][j] == '.') and 
                   (j == 0 or board[i][j - 1] == '.')):
                   
                    count += 1
        return count
                    
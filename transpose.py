def transpose(self, A: List[List[int]]) -> List[List[int]]:
    i = 0

    out = len(A)
    ins = len(A[0])

    r = [[0 for i in range(out)] for i in range(ins)]
    while i < out:
        j = 0
        while j < ins:
            r[j][i] = A[i][j]
                
            j += 1
        i += 1
    return(r)
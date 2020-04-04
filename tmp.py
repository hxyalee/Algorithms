def split_row(A, i, j, y):
    breaks = [x for x in range(i, j + 1) if A[x] < y + 1]
    sections = [[i, j]]
    for b in breaks:
        s, e = sections.pop()
        if s != b: sections.append((s, b - 1))
        if e != b: sections.append((b + 1, e))
    return(sections)

def tile(A, i, j, y, n, output):
    if i > j or y >= n:
        return
    sections = split_row(A, i, j, y)
    for a, b in sections:
        left = A[a] - y
        right = A[b] - y
        bottom = b - a + 1
        if bottom >= left and bottom >= right:
            output.append(((a, y), (b, y)))
            tile(A, a, b, y + 1, n, output)
        elif left >= right and left >= bottom:
            output.append(((a, y), (a, A[a] - 1)))
            tile(A, a + 1, b, y, n, output)
        elif right >= left and right >= bottom:
            output.append(((b, y), (b, A[b] - 1)))
            tile(A, a, b - 1, y, n, output)

A = [4,8,8,4,4,4,2]
m = len(A)
n = max(A)
output = []
tile(A, 0, m - 1, 0, n, output)
def split_row(A, i, j, y):
    breaks = [x for x in range(i, j + 1) if A[x] <= y]
    sections = [[i, j]]
    for b in breaks:
        s, e = sections.pop()
        if s != b: sections.append((s, b - 1))
        if e != b: sections.append((b + 1, e))
    return(sections)
def try_rows(A, i, j, y, n):
    cost = 0
    saved = 0
    for row in range(y, n):
        saved += len([x for x in range(i, j + 1) if A[x] == row + 1])
        cost += len(split_row(A, i, j, row))
        if saved >= cost:
            return [row + 1, cost]


def tile(A, i, j, y, n):
    if y >= n:
        return 0
    sections = split_row(A, i, j, y)
    total = 0
    for a, b in sections:
        result = try_rows(A, a, b, y, n)
        if result != None:
            row, cost = result
            total += cost + tile(A, a, b, row, n)
        else:
            total += b - a + 1
    return total


print(tile([4,3,5,2,5,4,5,5,0],i,j,y,n))
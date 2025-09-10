n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

def isAllPositive(col1, col2, row1, row2):
    for i in range(col1, col2 + 1):
        for j in range(row1, row2 + 1):
            if grid[i][j] <= 0:
                return False
    return True

def solve():
    area = -1;
    # make squares
    for col1 in range(0, n):
        for col2 in range(col1, n):
            for row1 in range(0, m):
                for row2 in range(row1, m):
                    if (isAllPositive(col1, col2, row1, row2)):
                        h = col2 - col1 + 1
                        w = row2 - row1 + 1
                        area = max(area, h * w)
                        

    return area

print(solve())

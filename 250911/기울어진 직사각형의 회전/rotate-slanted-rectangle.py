n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
r, c, m1, m2, m3, m4, dir = map(int, input().split())
r = r - 1
c = c - 1 

# Please write your code here.
def rotateClockWise():
    temp = grid[r][c]
    rotateNE(m1, r, c)
    nr = r - m1
    nc = c + m1
    rotateNW(m2, nr, nc)
    nr = nr - m2
    nc = nc - m2
    rotateSW(m3, nr, nc)
    nr = nr + m3
    nc = nc - m3
    rotateSE(m4, nr, nc)
    grid[r - 1][c - 1] = temp

def rotateCounterClockWise():
    temp = grid[r][c]
    rotateNW(m2, r, c)
    nr = r - m2
    nc = c - m2
    rotateNE(m1, nr, nc)
    nr = nr - m1
    nc = nc + m1
    rotateSE(m4, nr, nc)
    nr = nr + m4
    nc = nc + m4
    rotateSW(m3, nr, nc)
    grid[r - 1][c + 1] = temp
    
def rotateNE(m, x, y):
    for i in range(1, m + 1):
        nx = x - 1
        ny = y + 1
        grid[x][y] = grid[nx][ny]
        x = nx
        y = ny

def rotateNW(m, x, y):
    for i in range(1, m + 1):
        nx = x - 1
        ny = y - 1
        grid[x][y] = grid[nx][ny]
        x = nx
        y = ny

def rotateSE(m, x, y):
    for i in range(1, m + 1):
        nx = x + 1
        ny = y + 1
        grid[x][y] = grid[nx][ny]
        x = nx
        y = ny

def rotateSW(m, x, y):
    for i in range(1, m + 1):
        nx = x + 1
        ny = y - 1
        grid[x][y] = grid[nx][ny]
        x = nx
        y = ny

def printArr():
    for i in grid:
        print(' '.join(map(str, i)))

def solve():
    if (dir == 1):
        rotateClockWise()
    else:
        rotateCounterClockWise()
    printArr()

solve()
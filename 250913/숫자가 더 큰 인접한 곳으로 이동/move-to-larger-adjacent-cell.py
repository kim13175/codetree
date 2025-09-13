n, r, c = map(int, input().split())
grid = [[0] * (n + 1) for _ in range(n + 1)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(1, n + 1):
    row = list(map(int, input().split()))
    for j in range(1, n + 1):
        grid[i][j] = row[j - 1]

# Please write your code here.
def solve():
    trace = []
    trace.append(grid[r][c])
    
    while (canMove()):
        move()
        trace.append(grid[r][c])
    
    print_array(trace)

def canMove():
    global r, c
    for i in range(4):
        nx = r + dx[i]
        ny = c + dy[i]
        if (nx <= 0 or nx > n or ny <= 0 or ny > n):
            continue
        if (grid[nx][ny] > grid[r][c]):
            return True
    return False

def move():
    global r, c
    # dx, dy에 의해 초기화된 상하좌우 우선순위로 탐색
    # 가장 먼저 큰 값을 업데이트
    for i in range(4):
        nx = r + dx[i]
        ny = c + dy[i]
        if (nx <= 0 or nx > n or ny <= 0 or ny > n):
            continue
        if (grid[nx][ny] > grid[r][c]):
            r = nx
            c = ny
            break
            
def print_array(trace):
    print(' '.join(map(str, trace)))

solve()
n = int(input())
board = [[0 for _ in range(n)] for _ in range(n)]
bombed = [[False for _ in range(n)] for _ in range(n)]
area = 0
bomb_position = list()

# Please write your code here.
def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n

def bomb(x, y, b_type):
    bomb_shapes = [
        [],
        [[-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0]],
        [[-1, 0], [1, 0], [0, 0], [0, -1], [0, 1]],
        [[-1, -1], [-1, 1], [0, 0], [1, -1], [1, 1]],
    ]
    
    for i in range(5):
        dx, dy = bomb_shapes[b_type][i]
        nx, ny = x + dx, y + dy
        if in_range(nx, ny):
            bombed[nx][ny] = True

def calc():
    for i in range(n):
        for j in range(n):
            bombed[i][j] = False
    for i in range(n):
        for j in range(n):
            if board[i][j]:
                bomb(i , j, board[i][j])
    count = 0
    for i in range(n):
        for j in range(n):
            if bombed[i][j]:
                count += 1
    return count 

def find_max_area(cnt):
    global area
    if cnt == len(bomb_position):
        area = max(area, calc())
        return
    for i in range(1, 4):
        x, y = bomb_position[cnt]
        board[x][y] = i
        find_max_area(cnt + 1)
        board[x][y] = 0

def solve():
    for i in range(n):
        grid = list(map(int, input().split()))
        print(grid)
        for j, bomb_place in enumerate(grid):
            print(list(map(str, part))) 
            if bomb_place:
                bomb_position.append((i, j))
    find_max_area(0)
    print(area)

solve()
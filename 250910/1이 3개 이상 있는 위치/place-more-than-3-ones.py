n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]

def count_block(x, y):
    cnt = 0
    for direction in range(4):
        nx = x + dx[direction]
        ny = y + dy[direction]
        if (nx < n and ny < n and nx >= 0 and ny >= 0): 
            if (grid[nx][ny] == 1):
                cnt += 1            
    return cnt

def solve():
    total_cnt = 0;
    for x in range(n):
        for y in range(n):
            cnt = count_block(x, y)
            if (cnt >= 3):
                total_cnt += 1
    return total_cnt


print(solve())
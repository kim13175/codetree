n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]

def solve():
    x, y = 0, 0;
    total_cnt = 0;
    for x in range(n):
        cnt = 0;
        for y in range(n):
            for direction in range(4):
                nx = x + dx[direction]
                ny = y + dy[direction]
                if (nx < n and ny < n): 
                    if (grid[nx][ny] == 1):
                        cnt += 1
            if (cnt >= 3):
                total_cnt += 1
    return cnt


print(solve())
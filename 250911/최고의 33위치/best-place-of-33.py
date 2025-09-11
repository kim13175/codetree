n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
def solve():
    max_coin = 0
    for x in range(n - 2):
        for y in range(n - 2):
            coin_count = find_coin(x, y)
            max_coin = max(coin_count, max_coin)
    return max_coin
    
def find_coin(x, y):
    count = 0
    nx = x + 3
    ny = y + 3
    for i in range(x, nx):
        for j in range(y, ny):
            if (grid[i][j] == 1):
                count += 1
    return count

print(solve())
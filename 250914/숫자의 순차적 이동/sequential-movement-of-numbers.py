n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
directions = [
    (-1, -1), (-1, 0), (-1, 1),
    (0, -1), (0, 1),
    (1, -1), (1, 0), (1, 1)
]

def solve():
    change_number()
    for row in grid:
        print(' '.join(map(str, row)))

def debug(grid):
    for row in grid:
        print(' '.join(map(str, row)))
    print()    

def change_number():
    global grid

    for turn in range(m):
        for num in range(1, n * n + 1):
            found = False

            for x in range(n):
                for y in range(n):
                        if grid[x][y] == num:
                            ''' 
                                해당 칸 보다 작은 수들 밖에 없을 경우도 
                                8방향 중 제일 값이 큰 곳이랑 바꿔야 함 
                                -> 8방향 중 하나의 값으로 해 둘 경우 8방향 중 제일 큰 값으로 최대값은 무조건 바뀜
                            '''
                            max_value = 0
                            temp_x = temp_y = -1
                            # 8방향 탐색
                            for dx, dy in directions:
                                nx, ny = x + dx, y + dy
                                # 경계 체크
                                if (0 <= nx < n and 0 <= ny < n):
                                    if (max_value < grid[nx][ny]):
                                        max_value = grid[nx][ny]
                                        temp_x, temp_y = nx, ny
                            
                            grid[x][y] = max_value
                            grid[temp_x][temp_y] = num                                
                            found = True
                            break
                if found:
                    break        

solve()
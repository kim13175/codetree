n, m, t = map(int, input().split())

# Create n x n grid
a = [list(map(int, input().split())) for _ in range(n)]

# Get m marble positions
marbles = []
for _ in range(m):
    r, c = map(int, input().split())
    marbles.append((r-1, c-1))

# Please write your code here.
def solve():
    # 구슬 위치 복사
    cur_marbles = marbles[:]

    for time in range(t):
        new_loc = []
        for x, y in cur_marbles:
            new_x, new_y = move_marble(x, y)
            new_loc.append((new_x, new_y))

        position_count = {}
        for pos in new_loc:
            if pos in position_count:
                position_count[pos] += 1
            else:
                position_count[pos] = 1

        cur_marbles = []
        for pos in new_loc:
            if position_count[pos] == 1:
                cur_marbles.append(pos)

        if not cur_marbles:
            break
    print(len(cur_marbles))
        

# 구슬을 상하 좌우로 이동
def move_marble(x, y):
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    value = 0
    # 4방향 탐색
    for dx, dy in directions:
        nx = x + dx
        ny = y + dy
        # 경계 체크
        if 0 <= nx < n and 0 <= ny < n:
            # 상, 하, 좌, 우 최대값 찾기
            if value < a[nx][ny]:
                value = max(value, a[nx][ny])
                next_x = nx 
                next_y = ny
    # 바뀐 위치 반환
    return next_x, next_y

solve()
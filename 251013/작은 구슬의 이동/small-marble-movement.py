# Please write your code here.
def in_range(x, y, n):
    return x < 1 or x > n or y < 1 or y > n

def move(r, c, d):
    loc = {}
    loc['R'] = (0, 1)
    loc['L'] = (0, -1)
    loc['U'] = (-1, 0)
    loc['D'] = (1, 0)

    dr, dc = loc[d]

    return r + dr, c + dc

def bounce(d):

    reverse_direction = {
        'R': 'L', 
        'L': 'R',
        'U': 'D',
        'D': 'U'
    }
    return reverse_direction[d]

def solution():
    n, t = map(int, input().split())
    r, c, d = input().split()
    r, c = int(r), int(c)
    while t > 0:
        nr, nc = move(r, c, d)
        if in_range(nr, nc, n):
            d = bounce(d)
        else:
            r, c = nr, nc
        t -= 1
    return ' '.join(map(str, [r, c]))

print(solution())

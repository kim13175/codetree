# Please write your code here.
def in_range(x, y, n):
    return x < 1 or x > n or y < 1 or y > n

def move(r, c, d):
    func = {
        'R': lambda x, y: (x, y + 1), 
        'L': lambda x, y: (x, y - 1),
        'U': lambda x, y: (x - 1, y),
        'D': lambda x, y: (x + 1, y)
    }.get(d)

    return func(r, c) if func else None

def bounce(d):
    new_d = d
    func = {
        'R': lambda d: 'L', 
        'L': lambda d: 'R',
        'U': lambda d: 'D',
        'D': lambda d: 'U'
    }.get(d)
    
    return func(new_d) if func else None 

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

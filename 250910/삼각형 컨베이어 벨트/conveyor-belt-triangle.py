n, t = map(int, input().split())

l = list(map(int, input().split()))
r = list(map(int, input().split()))
d = list(map(int, input().split()))

# Please write your code here.
def solve(t):
    newStr = ''

    while t > 0:
        moveBelt()
        t -= 1

    for i in range(n):
        newStr += str(l[i]) + ' '
    newStr += '\n'

    for i in range(n):
        newStr += str(r[i]) + ' '
    newStr += '\n' 

    for i in range(n):
        newStr += str(d[i]) + ' '

    return newStr

def moveBelt():
    # left 의 마지막요소가 right로 처리 right의 마지막 요소 down의 마지막 요소로 삽입
    # down의 첫 번째요소가 left의 마지막 요소로 삽입
    leftLast = l[n-1] 
    rightLast = r[n-1] 
    downLast = d[n-1]
    
    for i in range(n-1, 0, -1):
        l[i] = l[i-1]
        r[i] = r[i-1]
        d[i] = d[i-1]
    r[0] = leftLast
    d[0] = rightLast
    l[0] = downLast

print(solve(t))
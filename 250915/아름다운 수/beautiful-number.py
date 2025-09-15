n = int(input())
numbers = [0 for _ in range(10)]
cnt = 0

# Please write your code here.
def solve(k):
    global cnt
    # n자리가 되었을 때 처리
    if (k == n):
        # 아름다운 수인지 판단
        if isBeautiful():
            cnt += 1
        return 

    for i in range(1, 5):
        numbers[k] = i
        solve(k + 1)


def isBeautiful():
    prev = numbers[0]
    count = 1

    for i in range(1, n):
        now = numbers[i]
        if prev == now:
            count += 1
        else:
            if (count % prev != 0):
                return False
            prev = now
            count = 1

    if (count % prev != 0):
        return False
    return True

solve(0)
print(cnt)
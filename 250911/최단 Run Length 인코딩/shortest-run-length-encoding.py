A = input()
lenA = len(A)

# Please write your code here.

# 문자 회전
def shiftString():
    global A
    A = A[lenA - 1] + A[0 : lenA - 1]

# 문자 인코딩
def encodingString():
    record = ''
    # 맨 첫 번째 글자를 뽑는다 (base)
    base = A[0]
    count = 1
    # 다음 번째 글자랑 비교한다 (비교 대상)
    for i in range(1, lenA):
        # 같다면은 개수를 증가한다
        if (base == A[i]):
            count += 1    
        # 다르다면 베이스가 변경되고 개수를 초기화하고 이전 글자의 개수를 기록한다
        else:
            record += base
            record += str(count)
            base = A[i]
            count = 1

    # 남은 글자의 개수를 기록한다
    return record + base + str(count)                

# 최소 길이 구하는 로직
#def minLenString():

def solve():
    minLen = 1e9
    for i in range(lenA):
        shiftString()
        temp = encodingString()
        minLen = min(minLen, len(temp))
    print(minLen)

solve()
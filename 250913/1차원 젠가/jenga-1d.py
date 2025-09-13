n = int(input())
blocks = [int(input()) for _ in range(n)]
s1, e1 = map(int, input().split())
s2, e2 = map(int, input().split())

# Please write your code here.
def solve():
    # 블록 삭제 (2번만 빼짐)
    block = delete_block(blocks, s1, e1)
    block = delete_block(block, s2, e2)
    print_answer(block)

def print_answer(block):
    print(len(block))
    for i in range(len(block)):
        print(str(block[i]))       

def delete_block(block, s, e):
    temp = []
    for i in range(len(block)):
        if i >= (s - 1) and i < e:
            continue
        temp.append(block[i])
    return temp

solve()
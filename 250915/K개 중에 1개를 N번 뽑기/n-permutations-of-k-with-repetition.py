K, N = map(int, input().split())
numbers = [0 for _ in range(8)]

# Please write your code here.
def solve(count):
    if count == N:
        print_numbers()
        return
    for num in range(1, K + 1):
        numbers[count] = num
        solve(count + 1)
    
def print_numbers():
    for i in range(N):
        print(numbers[i], end=' ')
    print()    

solve(0)
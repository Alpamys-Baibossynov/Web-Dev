n = int(input())
arr = list(map(int, input().split()))

for i in range(0, n // 2):
    temp = arr[i]
    arr[i] = arr[n - 1 - i]
    arr[n - 1 - i] = temp

for i in range(len(arr)):
    print(arr[i], end=" ")
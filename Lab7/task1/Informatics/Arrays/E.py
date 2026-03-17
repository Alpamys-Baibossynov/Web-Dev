n = int(input())
arr = list(map(int, input().split()))
isIt = False

for i in range(1, len(arr)):
    if (arr[i] * arr[i-1] > 0):
        isIt = True

if (isIt == True):
    print("YES")
else:
    print("NO")
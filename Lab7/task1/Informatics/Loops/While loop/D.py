n = int(input())
i = 1
isIt = False

while (i <= n):
    if (i == n):
        print("YES")
        isIt = True
        break
    i *= 2
    
if (isIt == False):
    print("NO")
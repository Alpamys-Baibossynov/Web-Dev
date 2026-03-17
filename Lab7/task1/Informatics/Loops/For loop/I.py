import math

a = int(input())
count = 0

for i in range(1, int(math.sqrt(a)) + 1):
    if (a % i == 0):
        count += 1
        if (i != a // i):
            count += 1

print(count)
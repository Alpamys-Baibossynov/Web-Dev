import math

def is_square(n):
    if n < 0:
        return False
    root = math.sqrt(n)
    return root.is_integer()

a = int(input())
b = int(input())
for i in range(a, b + 1):
    if is_square(i):
        print(i)
def power(a, b):
    return float(a) ** float(b)

a, b = map(float, input().split())
print(power(a, b))
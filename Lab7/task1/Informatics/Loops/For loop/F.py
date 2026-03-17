a = input()
reverse = ""

for i in range(len(a) - 1, -1, -1):
    reverse += a[i]
reverse = int(reverse)
print(reverse)
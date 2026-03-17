a = str(input())
b = int(input())
count = 0
for i in a:
    if int(i) == b:
        count += 1
print(count)
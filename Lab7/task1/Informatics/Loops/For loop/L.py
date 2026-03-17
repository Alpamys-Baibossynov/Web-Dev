num = 0
binary = input()
power = 0

for i in range(len(binary) - 1, -1, -1):
    if (binary[i] == '1'):
        num += (2 ** power)
    power += 1

print(num)
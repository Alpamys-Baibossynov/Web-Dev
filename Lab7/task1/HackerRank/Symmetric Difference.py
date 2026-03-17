if __name__ == "__main__":
    m = int(input())
    a = set(map(int, input().split()))
    n = int(input())
    b = set(map(int, input().split()))
    diff = a.symmetric_difference(b)
    
    for x in sorted(diff):
        print(x)
if __name__ == '__main__':
    n = int(input())
    stamps = set()
    
    for i in range(n):
        stamps.add(input())
    
    print(len(stamps))
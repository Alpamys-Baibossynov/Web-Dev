if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    uni_scores = sorted(list(set(arr)))
    print(uni_scores[-2])
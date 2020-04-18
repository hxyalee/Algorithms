


def get_gcd(a,b):
    ans = 1
    m = min(a,b)
    for i in range(1, m + 1):
        if a % i == 0 and b % i == 0:
            ans = i

    return ans

if __name__ == "__main__":
    level = int(input())

    hi = -1 if level == -1 else 0
    lo = 2**31 - 1
    flag = False
    for i in range(level + 1):
        a = input().split()
        n = len(a)

        if n % 2 == 1:
            a.append(-1)
            n+=1
        for i in range(n):
            a[i] = int(a[i])
        i = 0
        while i<n:
            if a[i] == -1 or a[i + 1] == -1:
                i += 2
            else:
                flag = True
                hi = max(get_gcd(a[i],a[i + 1]), hi)
                lo = min(get_gcd(a[i],a[i + 1]), lo)
                i += 2
    if flag:
        print(hi - lo)
    else:
        print(hi)
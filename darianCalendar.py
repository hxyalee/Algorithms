#!/bin/python3

import math
import os
import random
import re
import sys
'''

'''

#
# Complete the 'calc_days_between' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING start
#  2. STRING end
#
'''
    24 months
    first 5 months of each quearter have 28 days
    if leap year
        final month of the year has 28 days
        decade has 669 years happens 6 times
    else:
        final month has 27 days
        decade has 668 years 4 times

Leap year = any year what is odd
or divisible by 10
'''
def isLeap(y):
    if y % 2 != 0 or y % 10 == 0:
        return True
    return False

def calc_days_between(start, end):
    # Write your code here
    sY = (int(start[4:]))
    sM = (int(start[2:4]))
    sD = (int(start[:2]))

    eY = (int(end[4:]))
    eM = (int(end[2:4]))
    eD = (int(end[:2]))

  
    n1 = sY * 668 + sD
    for i in range(0, sM - 1):
        if (i+1) % 6 == 0:
            n1+=27
        else:
            n1+=28
  

    n2 = eY * 668 + eD
    for i in range(0, eM - 1):
        if (i+1) % 6 == 0:
            n2+=27
        else:
            n2+=28

    for x in range(sY, eY):
        if isLeap(x):
            n2+=1
    
    return(n2 - n1)

    

if __name__ == '__main__':
    print(calc_days_between(input(), input()))
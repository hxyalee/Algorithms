#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'rankIndex' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. 2D_INTEGER_ARRAY values
#  2. INTEGER rank
#

def rankIndex(values, rank):
    for i in range(len(values)):
        values[i] = [sum(values[i]), i]
    n = sorted(values, reverse = True, key=lambda x: (x[0], - x[1]))
    return n[rank-1][1]
    # Write your code here

if __name__ == '__main__':
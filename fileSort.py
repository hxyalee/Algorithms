#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'sort_by_file_size' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts STRING_ARRAY filesizes as parameter.
#

def sort_by_file_size(filesizes):
    # Write your code here
    n = []
    kb = []
    mb = []
    gb = []
    tb = []
    
    for x in filesizes:
        tmp = []
        tmp = x.strip('1234567890')
        number = (''.join(i for i in x if i.isdigit()))
        number = int(number)
        if tmp == "KB":
            kb.append(number)
        elif tmp == "MB":
            mb.append(number)
        elif tmp == "GB":
            gb.append(number)
        elif tmp == "TB":
            tb.append(number)
    kb.sort()
    mb.sort()
    gb.sort()
    tb.sort()
    for x in kb:
        i = str(x)+"KB"
        n.append(i)
    for x in mb:
        i = str(x)+"MB"
        n.append(i)
    for x in gb:
        i = str(x)+"GB"
        n.append(i)
    for x in tb:
        i = str(x)+"TB"
        n.append(i)


    return n
if __name__ == '__main__':
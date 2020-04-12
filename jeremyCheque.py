# Jeremy Lim

# To run the program, type 'python3 cheque_writer.py'.
# To run tests, type 'python3 tests.py'.
# Apologies for the small number input bug for tests.

# Reflection:

# 1. When thinking about this task, I had to make sure that I was still considering the time and space complexity and did not want
# to have a time of O(n^2). This meant I wanted to pass each digit once.
# Up until ten thousands, my method below worked perfectly, but I ran into trouble combining tens together and had to rethink my
# approach. I knew that using a dictionary to store the digit values meant the search would be optimised, but I had to solve
# how to divide to get the exact values.

# 2. If I had more time, I would've tried a different solution with recursively going through the function.
# Given the time constraints and the large scale testing needed, I wanted to ensure I still solved the solution, even if it's
# inefficient
# I finished it in around 2 hours, but I wanted to make sure that documentation was complete, as I maintain
# a level of perfection within what I do. I felt that given a professional setting, it is necessary to write comments after
# the task so other developers can understand the code too.

import math

wordDict = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
    1000: 'one thousand',
    100000: 'one hundred thousand',
    1000000: 'one million',
    1000000000: 'one billion'}

def convertToWords(money: float):
    word = ""

    money = int(money)

    while money > 0:
        # sees if the money amount is in the dictionary => e.g. money = 10 = ten
        # if it is in the dictionary, adds that word and returns
        # loops through each digit to go through their values
        try:
            word += wordDict[money] + " "
            return word
        except KeyError:
            try:
                # if money is less than 100
                if money < 100:
                    word += wordDict[money - money % 10] + " "
                    money %= 10
                
                # if money is less than thousand
                elif money < 1000:
                    word += wordDict[(money - money % 100)/100] + " hundred "
                    money %= 100

                # if money is less than ten thousands
                elif money < 10000:
                    word += wordDict[(money - money % 1000)/1000] + " thousand "
                    money %= 1000
                
                # if money is less than twenty thousands
                elif money < 20000:
                    word += wordDict[(money - money % 1000)/1000] + " thousand "
                    money %= 1000

                # if money is less than hundred thousands
                elif money < 100000:
                    word += tens(word, money/1000) + "thousand "
                    money %= 10000
                
                # if money is less than million
                elif money < 1000000:
                    word = word + wordDict[(money - money % 100000)/100000] + " hundred "
                    money %= 100000

                # if money is less than ten millions
                elif money < 10000000:
                    word += wordDict[(money - money % 1000000)/1000000] + " million "
                    money %= 1000000
                # if money is less than twenty millions
                elif money < 20000000:
                    word += wordDict[(money - money % 1000000)/1000000] + " million "
                    money %= 1000000
                # if money is less than hundred millions
                elif money < 100000000:
                    word += tens(word, money/1000000)
                    money %= 10000000
                
                # if money is less than billion
                elif money < 1000000000:
                    word += wordDict[(money - money % 100000000)/100000000] + " hundred "
                    money %= 100000000
                # if money is less than two billion
                elif money < 2000000000:
                    word += wordDict[(money - money % 1000000000)/1000000000] + " billion "
                    money %= 1000000000
                # if money is equal to two billion
                elif money == 2000000000:
                    word += wordDict[(money - money % 1000000000)/1000000000] + " billion "
                    money %= 1000000000
            # no key in dict
            except KeyError:
                pass

        money = int(money)

    return word

# certain values requiring double digits
def tens(word, money):
    return wordDict[money - money % 10] + " "

# main function
def main(num: float):
    if num == 0:
        return "zero dollars"
    # if less than 1 dollar
    elif num < 1:
        return handleCents(num).strip()
    elif num > 2000000000:
        return "Out of range"
    else:
        final = handleDollars(num) + handleCents(num)
    return final.strip()

# handle dollars
def handleDollars(num: float):
    dollars = int(num)
    if (dollars == 1):
        return convertToWords(dollars) + "dollar "
    else:
        return convertToWords(dollars) + "dollars "

# handle cents
def handleCents(num: float):
    cents = round((num - int(num)) * 100)
    if (cents == 0):
        return ""
    elif (cents == 1):
        return convertToWords(cents) + "cent"
    else:
        return convertToWords(cents) + "cents"

def runProgram():
    num = int(input("Enter a number: "))
    print(main(num))

runProgram()
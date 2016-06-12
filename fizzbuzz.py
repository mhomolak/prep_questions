# 1. Write a function that will output the numbers from one to one-hundred.
# However, for numbers evenly divisible by three print “On” instead and numbers
# evenly divisible by seven print “Base”. For those numbers that are evenly
# divisible by both three and seven print “OnBase”.

def oB():
    for i in range(1, 101):
        if i % 21 == 0:
            print "OnBase"
        elif i % 3 == 0:
            print "On"
        elif i % 7 == 0:
            print "Base"
        else:
            print i

print oB()

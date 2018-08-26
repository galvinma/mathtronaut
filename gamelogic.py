import random

def multiplication_game_logic(nums):
    ans = 1
    numbers = []
    for x in range(nums):
        r = random.randrange(1,13,1)
        numbers.append(r)
        ans = ans * r
    return numbers, ans

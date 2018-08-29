import random
import json

def multiplication_game_logic(nums):
    ans = 1
    numbers = []
    for x in range(nums):
        r = random.randrange(1,13,1)
        numbers.append(r)
        ans = ans * r
    return numbers, ans

def score(scores):
    result = json.loads(scores)
    score = 0
    for x in result:
        score = score + int(x)
    return score

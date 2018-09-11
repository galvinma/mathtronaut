import datetime
import time
import schedule
from tinydb import TinyDB, Query

db = TinyDB('scores.json')

def purgeOldScores():
    Q = Query()
    for x in db.all():
        strip = datetime.datetime.strptime(x['timestamp'], "%Y-%m-%d %H:%M:%S.%f")
        if datetime.datetime.now() - strip > datetime.timedelta(seconds=86400):
            db.remove(Q.username == x['username'])

schedule.every(10).minutes.do(purgeOldScores)

while True:
    schedule.run_pending()
    time.sleep(1)

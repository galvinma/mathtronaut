import datetime
import time
import schedule
from os.path import expanduser
from sqlalchemy import exists, create_engine, exc
from sqlalchemy.orm import sessionmaker, scoped_session, query
from sqlalchemy.ext.declarative import declarative_base

from model import DeclarativeBase, HighScores


with open(expanduser('~/.pgpass'), 'r') as f:
    host, port, database, user, password = f.read().split(':')
uri = "postgresql://mathtronaut:"+str(password.strip())+"@localhost/mathtronaut"
original_engine = create_engine(uri)
Session = sessionmaker(bind=original_engine)
metadata = DeclarativeBase.metadata
metadata.create_all(original_engine)
session = Session()

def purgeOldScores():
    q = session.query(HighScores).order_by(HighScores.score)
    for x in q.all():
        strip = datetime.datetime.strptime(x.timestamp, "%Y-%m-%d %H:%M:%S.%f")
        if datetime.datetime.now() - strip > datetime.timedelta(seconds=86400):
            session.delete(x)
            session.commit()

schedule.every(10).minutes.do(purgeOldScores)

while True:
    schedule.run_pending()
    time.sleep(1)

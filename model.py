from sqlalchemy import Table, Column, Integer, String, Sequence
from sqlalchemy.ext.declarative import	declarative_base

DeclarativeBase = declarative_base()

class HighScores(DeclarativeBase):
	__tablename__ = 'HighScores'

	id = Column('id', Integer, Sequence('user_id'), primary_key=True)
	username = Column('username', String)
	score = Column('score', Integer)
	timestamp = Column("timestamp", String)

import json
import datetime
import operator
from flask import Flask, jsonify, request
from flask_api import FlaskAPI
from flask_cors import CORS
from sqlalchemy import exists, create_engine, exc
from sqlalchemy.orm import sessionmaker, scoped_session, query
from sqlalchemy.ext.declarative import declarative_base

from model import DeclarativeBase, HighScores

app = FlaskAPI(__name__)
CORS(app)
# db
original_engine = create_engine('postgresql:///mathtronaut')
Session = sessionmaker(bind=original_engine)
metadata = DeclarativeBase.metadata
metadata.create_all(original_engine)
session = Session()

def insert_user(username, score):
    print("In insert_user. Inserting user...")
    hs = HighScores(username = username, score = score, timestamp = str(datetime.datetime.now()))
    session.add(hs)
    session.commit()
    return

def remove_lowest_score():
    print("In remove_lowest_score. Removing user...")
    q = session.query(HighScores).order_by(HighScores.score)
    session.delete(q[0])
    session.commit()
    return

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    leaders = []
    q = session.query(HighScores).order_by(HighScores.score)
    for entry in q.all():
        leaders.append({'username': entry.username, 'score': int(entry.score), 'timestamp': str(entry.timestamp)})
    leaders = sorted(leaders, key=operator.itemgetter('score'), reverse=True)
    return jsonify(leaders)

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    score = int(request.args.get('score'))
    leaderboard = session.query(HighScores).order_by(HighScores.score)
    if leaderboard.count() >= 0 and leaderboard.count() < 25:
        print("In is_top. len of db is >= 0 and < 25. Returning True")
        return jsonify(True)
    if leaderboard.count() >= 25:
        print("In is_top. len of db is > 25")
        low = int(leaderboard[0].score)
        if score > low:
            return jsonify(True)
            print("Returning True")
        else:
            return jsonify(False)
            print("Returning False")

@app.route("/api/v1/insertuser", methods=['GET'])
def insert():
    leaderboard = session.query(HighScores).order_by(HighScores.score)
    print("In insert(). Calling insert_user()...")
    username = request.args.get('username')
    score = request.args.get('score')
    insert_user(username, score)
    if leaderboard.count() > 25:
        print("In insert(). Calling remove_lowest_score() because len of db is > 25")
        remove_lowest_score()
    return jsonify(None)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5100, ssl_context=('/etc/letsencrypt/live/matthewrgalvin.com/fullchain.pem', '/etc/letsencrypt/live/matthewrgalvin.com/privkey.pem'))

import json
import datetime
import operator
import schedule
from tinydb import TinyDB, Query
from flask import Flask, jsonify, request
from flask_api import FlaskAPI
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)

# Init DB
db = TinyDB('scores.json')

def insert_user(username, score):
    db.insert({'username': username, 'score': int(score), 'timestamp': str(datetime.datetime.now())})
    return

def remove_lowest_scores():
    Q = Query()
    low = int(min([x['score'] for x in db.all()]))
    db.remove(Q.score < low)
    return

def purgeOldScores():
    Q = Query()
    for x in db.all():
        strip = datetime.datetime.strptime(x['timestamp'], "%Y-%m-%d %H:%M:%S.%f")
        if datetime.datetime.now() - strip > datetime.timedelta(1):
            db.remove(Q.username == x['username'])

schedule.every(10).minutes.do(purgeOldScores)

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    leaders = sorted(db.all(), key=operator.itemgetter('score'), reverse=True)
    return jsonify(leaders)

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    score = int(request.args.get('score'))
    low = int(min([x['score'] for x in db.all()]))
    if len(db.all()) < 25:
        return jsonify(True)
    elif score > low:
        return jsonify(True)
    else:
        return jsonify(False)

@app.route("/api/v1/insertuser", methods=['GET'])
def insert():
    # Get result
    username = request.args.get('username')
    score = request.args.get('score')
    if len(db.all()) < 25:
        insert_user(username, score)
    else:
        remove_lowest_scores()
        insert_user(username, score)
    return jsonify(None)

if __name__ == "__main__":
    app.run()

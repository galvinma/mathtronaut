import json
import datetime
import operator
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

def remove_lowest_score():
    Q = Query()
    low = int(min([x['score'] for x in db.all()]))
    print(low)
    db.remove(Q.score <= low)
    return

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    leaders = sorted(db.all(), key=operator.itemgetter('score'), reverse=True)
    return jsonify(leaders)

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    score = int(request.args.get('score'))
    if len(db.all()) < 25:
        return jsonify(True)
    low = int(min([x['score'] for x in db.all()]))
    if score > low:
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
        remove_lowest_score()
        insert_user(username, score)
    return jsonify(None)

if __name__ == "__main__":
    app.run()

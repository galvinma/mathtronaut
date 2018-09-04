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

def remove_lowest_scores():
    Q = Query()
    low = int(min([x['score'] for x in db.all()]))
    print("Low score is "+str(low))
    print("Removing lowest...")
    print(db.remove(Q.score == low))
    db.remove(Q.score < low)
    return

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    leaders = sorted(db.all(), key=operator.itemgetter('score'), reverse=True)
    return jsonify(leaders)

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    score = int(request.args.get('score'))
    low = int(min([x['score'] for x in db.all()]))
    if len(db.all()) < 25:
        print("DB is less than 25")
        return jsonify(True)
    elif score > low:
        print("DB is greater than 25, score > low")
        return jsonify(True)
    else:
        print("DB is greater than 25, score < low")
        return jsonify(False)

@app.route("/api/v1/insertuser", methods=['GET'])
def insert():
    # Get result
    username = request.args.get('username')
    score = request.args.get('score')
    print("Length of db is "+str(len(db.all())))
    if len(db.all()) < 25:
        print("inserting user "+username)
        insert_user(username, score)
    else:
        print("Removing lowest and then inserting user "+username)
        remove_lowest_scores()
        insert_user(username, score)
    return jsonify(None)

if __name__ == "__main__":
    app.run()

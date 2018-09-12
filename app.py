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
    db.remove(Q.score <= low)
    return

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    leaders = sorted(db.all(), key=operator.itemgetter('score'), reverse=True)
    return jsonify(leaders)

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    score = int(request.args.get('score'))
    if len(db.all()) == 0:
        return jsonify(True)
    if len(db.all()) > 0:
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
    insert_user(username, score)
    if len(db.all()) >= 25:
        remove_lowest_score()
    return jsonify(None)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5100, ssl_context=('/etc/letsencrypt/live/matthewrgalvin.com/fullchain.pem', '/etc/letsencrypt/live/matthewrgalvin.com/privkey.pem'))

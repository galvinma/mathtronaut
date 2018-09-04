import json
import datetime
from tinydb import TinyDB, Query
from flask import Flask, jsonify, request
from flask_api import FlaskAPI
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)

# Init DB
db = TinyDB('scores.json')

# Mock data
db.purge()
db.insert({'username': 'Adfff007', 'score': 2200, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': '<3', 'score': 1200, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 'mike', 'score': 20, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 'FLY', 'score': 19987, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': '1111', 'score': 22002, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 'Adam2007', 'score': 2300, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 's', 'score': 87222, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 'sad', 'score': 45673, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 'RPGER', 'score': 12200, 'timestamp': str(datetime.datetime.now())})
db.insert({'username': 'GAMERMAN', 'score': 34567, 'timestamp': str(datetime.datetime.now())})

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    return jsonify(db.all())

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    # DB query to determine if score is in top 25
    # returns bool

    return jsonify(query)

@app.route("/api/v1/insertuser", methods=['GET'])
def gamelogic():
    # If DB < 25 entries, add user
    num = int(request.args.get('num'))
    numbers, ans = multiplication_game_logic(num)



if __name__ == "__main__":
    app.run()

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
    print("In insert_user. Inserting user...")
    print("Length of db is "+str(len(db.all())))
    db.insert({'username': username, 'score': int(score), 'timestamp': str(datetime.datetime.now())})
    return

def remove_lowest_score():
    print("In remove_lowest_score. Removing user...")
    print("Length of db is "+str(len(db.all())))
    Q = Query()
    low = int(min([x['score'] for x in db.all()]))
    print("Low score is... "+str(low))
    print("Q.score is ..."+str(Q.score))
    db.remove(Q.score <= low)
    return

@app.route("/api/v1/leaderboard", methods=['GET'])
def return_leaderboard():
    print("Length of db is "+str(len(db.all())))
    leaders = sorted(db.all(), key=operator.itemgetter('score'), reverse=True)
    return jsonify(leaders)

@app.route("/api/v1/istop", methods=['GET'])
def is_top():
    score = int(request.args.get('score'))
    if len(db.all()) >= 0 and len(db.all()) < 25:
        print("In is_top. len of db is >= 0 and < 25. Returning True")
        return jsonify(True)
    if len(db.all()) >= 25:
        print("In is_top. len of db is > 25")
        low = int(min([x['score'] for x in db.all()]))
        if score > low:
            return jsonify(True)
            print("Returning True")
        else:
            return jsonify(False)
            print("Returning False")

@app.route("/api/v1/insertuser", methods=['GET'])
def insert():
    # Get result
    print("In insert(). Calling insert_user()...")
    username = request.args.get('username')
    score = request.args.get('score')
    insert_user(username, score)
    if len(db.all()) > 25:
        print("In insert(). Calling remove_lowest_score() because len of db is > 25")
        remove_lowest_score()
    return jsonify(None)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5100, ssl_context=('/etc/letsencrypt/live/matthewrgalvin.com/fullchain.pem', '/etc/letsencrypt/live/matthewrgalvin.com/privkey.pem'))

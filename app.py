import json
from flask import Flask, jsonify, request
from flask_api import FlaskAPI
from flask_cors import CORS

from gamelogic import multiplication_game_logic

app = FlaskAPI(__name__)
CORS(app)

@app.route("/")
def index():
    return "This will be the API..."

# conside axios async
@app.route("/api/v1/regularmode", methods=['GET', 'POST'])
def gamelogic():
    # put safeguard type logic
    num = int(request.args.get('num'))
    numbers, ans = multiplication_game_logic(num)

    gamelogic = [{
        "gamelogic": {
            "numbers": str(numbers),
            "answer": str(ans)
        }
    }]
    return jsonify(gamelogic)

if __name__ == "__main__":
    app.run()

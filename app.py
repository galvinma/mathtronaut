import json
from flask import Flask, jsonify, request
from flask_api import FlaskAPI
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)

# conside axios async
@app.route("/api/v1/regular", methods=['GET', 'POST'])
def gamelogic():
    # Check if score is in top 25
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

import json
from flask import Flask, jsonify
from flask_api import FlaskAPI
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)

data = [{
    "gamelogic": {
        "name": "Zaphod Beeblebrox",
        "price": "Betelgeusian"
    }
}]


@app.route("/")
def index():
    return "This will be the API..."

@app.route("/api/v1/regularmode", methods=['GET', 'POST'])
def example():
    return jsonify(data)

if __name__ == "__main__":
    app.run()

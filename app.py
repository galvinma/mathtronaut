from flask import Flask
from flask_api import FlaskAPI

app = FlaskAPI(__name__)

@app.route("/")
def index():
    return "This will be the API..."

@app.route('/example/')
def example():
    return {'hello': 'world'}

if __name__ == "__main__":
    app.run()

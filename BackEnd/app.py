from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


if __name__ == "__main__":
    app.run(debug=True)
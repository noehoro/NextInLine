from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# CONN = create_engine('sqlite:///database.db')

META_DATA = MetaData(bind=CONN, reflect=True)

META_DATA.reflect()


if __name__ == "__main__":
    app.run(debug=True)
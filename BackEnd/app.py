from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, create_engine, text
from random import randint

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
CORS(app)

CONN = create_engine('sqlite:///database.db')

META_DATA = MetaData(bind=CONN, reflect=True)

META_DATA.reflect()


if __name__ == "__main__":
    app.run(debug=True)
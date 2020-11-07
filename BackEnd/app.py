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


@app.route('/')
def hello_world():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


@app.route('/api/test', methods=['POST'])
def test():
    content = request.json
    return jsonify({"username": content['username']})


@app.route('/api/login', methods=['POST'])
def signIn():
    if request.method == 'POST':
        content = request.json
        username = content['username']
        password = content['password']

    final = []
    with CONN.connect() as con:
        rs = con.execute(f'SELECT * FROM users WHERE user_name = "{username}"')
        for row in rs:
            final.append(row)

    if final:
        if final[0][2] == password:
            return jsonify({"data": {"id": final[0][0], "username": final[0][3]}})

    return jsonify({"data": 0})


@app.route('/api/signup', methods=['POST'])
def signUp():
    if request.method == 'POST':
        content = request.json
        username = content['username']
        password = content['password']
        fullname = content['fullname']
        gender = content['gender']
        email = content['email']
        categories = content['categories']  # [1,0,1,0,2,3,4,5,6]
        questions = content['questions']  # [1,3,5,7]
        user_id = randint(1000, 10000000)

    final = []
    with CONN.connect() as con:
        rs = con.execute(f'SELECT * FROM users WHERE user_name = "{username}"')
        for row in rs:
            final.append(row)

        if final:
            return jsonify({"data": 0})
        con.execute("INSERT INTO users (user_id, user_name, password,  full_name, gender, email, category_0, category_1, category_2, category_3, category_4, category_5, category_6, category_7, category_8, category_9, category_10, category_11, pizza_burger, cat_dog, bar_movie, obamma_trump) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    (user_id, username, password, fullname, gender, email, categories[0], categories[1], categories[2], categories[3], categories[4], categories[5], categories[6], categories[7], categories[8], categories[9], categories[10], categories[11], questions[0], questions[1], questions[2], questions[3]))

        return jsonify({"data": {"id": user_id, "username": fullname}})


@app.route('/api/request', methods=['POST'])
def eventSignUp():
    if request.method == 'POST':
        content = request.json
        cat_id = randint(1000, 10000000)
        user_id = content['id']
        category_id = content['category_id']
        time_range = content['time_range']
        location = content['location']
        comment = content['comment']

    final = []
    with CONN.connect() as con:
        con.execute("INSERT INTO requests (id, user_id, category_id, time_range, location, comment, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    (cat_id, user_id, category_id, time_range, location, comment, "PENDING"))

    return jsonify({"data": {"id": cat_id}})


if __name__ == "__main__":
    app.run(debug=True)
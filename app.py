from flask import Flask, request, jsonify, session, request, redirect
from flask_cors import CORS
import random
import qrcode

from config import API_KEY, DB_URL

from ibmcloudant.cloudant_v1 import CloudantV1, Document
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator


def connectDB():

    authenticator = IAMAuthenticator(API_KEY)

    service = CloudantV1(authenticator=authenticator)

    service.set_service_url(DB_URL)

    response = service.get_server_information().get_result()
    print("DATABASE CONNECTED")

    # response = service.put_database(db='line').get_result()
    # response = service.put_database(db='customer').get_result()
    return service


app = Flask(__name__)
app.config['SECRET_KEY'] = '9a63e9b6b22e11eabdab2816a84a348cc0491ea4b22e11eaac1f2816a84a348cc49ad6abb22e11eab6112816a84a348c'
CORS(app)

instance = connectDB()


@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


# individually creates a customer instance
# Kevin made it. Ask Kevin for questions


@app.route('/addCustomer')
def addCustomer():
    name = request.args.get('name', None)
    phone = request.args.get('phone', None)
    customer_doc = Document(
        name=name,
        phone=phone)

    response = instance.post_document(
        db='customer', document=customer_doc).get_result()

    return response

# a route to see all lines
# Kevin made it. Ask Kevin for questions


@ app.route('/getLines')
def getLines():

    response = instance.post_all_docs(
        db='line',
        include_docs=True,
        limit=10
    ).get_result()

    return response


@app.route('/createline', methods=['POST'])
def createLine():
    code = random.randint(1000, 9999)
    name = request.get_json()['name']
    session['line_operator'] = {"name": name, "code": code}

    line_doc = Document(
        code=code,
        title=title,
        customer_list=[])

    response = instance.post_document(
        db='line', document=line_doc).get_result()

    return jsonify({"code": code})


@app.route('/join/<code>')
def join(code):
    # TODO All user to waiting line
    session['customer'] = {"name": "name", "code": code}
    return redirect('/#/waiting')

# @app.route('/getlist/<code>')
# def getList(code):



def GenerateQRCode(url):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=4
    )

    qr.add_data(url)
    qr.make(fit=True)

    return qr.make_image(fill_color="black", back_color="white")


if __name__ == "__main__":
    app.run(debug=True)

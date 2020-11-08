from flask import Flask, request, jsonify
from flask_cors import CORS

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
CORS(app)

instance = connectDB()


@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


@app.route('/addLine')
def addLine():

    title = request.args.get('title', None)

    line_doc = Document(
        title=title,
        customer_list=[])

    response = instance.post_document(
        db='line', document=line_doc).get_result()

    return response


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


@ app.route('/getLines')
def getLines():

    response = instance.post_all_docs(
        db='line',
        include_docs=True,
        limit=10
    ).get_result()

    return response


if __name__ == "__main__":
    app.run(debug=True)

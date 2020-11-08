from flask import Flask, request, jsonify, session, request, redirect
from flask_cors import CORS
import random
import qrcode
import nexmo

# from config import API_KEY, DB_URL, NEXMO_API_KEY, NEXMO_API_SECRET, ACCOUNT_NAME

# from ibmcloudant.cloudant_v1 import CloudantV1, Document
# from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

# from cloudant.client import Cloudant


# def connectDB():
#     connection = Cloudant.iam(ACCOUNT_NAME, API_KEY, connect=True)
#     print("DATABASE CONNECTED")

#     return connection


# # Create a new Nexmo Client object:
# nexmo_client = nexmo.Client(
#     NEXMO_API_KEY, NEXMO_API_SECRET
# )

app = Flask(__name__)
app.config['SECRET_KEY'] = '9a63e9b6b22e11eabdab2816a84a348cc0491ea4b22e11eaac1f2816a84a348cc49ad6abb22e11eab6112816a84a348c'
CORS(app)

# connection = connectDB()


@app.route('/')
def homepage():
    return "lol"


# Send a request with {name:string} as a body param
# Code will be autogenerated here
# Barber opens shop
# creates List, enters name
# Get name and code
# create new empty line, and also generates the code
# returns the code

# @app.route('/createline', methods=['POST'])
# def createline():
#     code = random.randint(100000, 999999)
#     name = request.get_json()['name']

#     database = connection['next_in_line']
#     data = {
#         'name': name,
#         '_id': str(code),
#         'customers': []
#     }
#     response_document = database.create_document(data)
#     print(response_document)

#     session['line_operator'] = {"name": name, "code": code}

#     return jsonify({"code": code})


# @app.route('/addUser', methods=['POST'])
# def addUser():
#     name = request.get_json()['name']
#     phone = request.get_json()['phone']
#     code = request.get_json()['code']

#     session['customer'] = {"name": "name", "code": code, "phone": phone}

#     database = connection['next_in_line']
#     data = {
#         'name': name,
#         'phone': phone
#     }

#     response_document = database[code]
#     response_document['customers'].append(data)
#     response_document.save()

#     return jsonify({"response_data": response_document})


# # return all lines
# @app.route('/getlines', methods=["GET"])
# def getlines():
#     response_data = []
#     database = connection['next_in_line']
#     for document in database:
#         response_data.append(document)
#     return jsonify({"response_data": response_data})


# # return a single line given a code
# @app.route('/getline', methods=['POST'])
# def getline():
#     response_document = {}

#     code = request.get_json()['code']
#     database = connection['next_in_line']

#     doc_exists = code in database

#     if doc_exists:
#         response_document = database[code]

#     return jsonify({"response_data": response_document['customers']})


# # return the notified and removed customer
# @app.route('/notifycustomer', methods=['PUT'])
# def notifycustomer():
#     response_document = {}

#     code = request.get_json()['code']  # code of the line
#     database = connection['next_in_line']

#     doc_exists = code in database

#     if doc_exists:
#         response_document = database[code]
#         removed_customer = response_document["customers"].pop(0)
#         response_document.save()

#         phone_number = removed_customer["phone"]
#         phone_number = int(phone_number)
#         send_sms(phone_number)

#     else:
#         return jsonify({"response_data": "line not found"})

#     return jsonify({"response_data": removed_customer})


# def GenerateQRCode(url):
#     qr = qrcode.QRCode(
#         version=1,
#         error_correction=qrcode.constants.ERROR_CORRECT_M,
#         box_size=10,
#         border=4
#     )

#     qr.add_data(url)
#     qr.make(fit=True)

#     return qr.make_image(fill_color="black", back_color="white")


# def send_sms(number):

#     # Extract the form values:
#     to_number = number

#     # Send the SMS message:
#     result = nexmo_client.send_message({
#         'from': 15403244383,
#         'to': to_number,
#         'text': 'Nik tell us if u got this',
#     })

#     return "hello There!"


# if __name__ == "__main__":
#     app.run()

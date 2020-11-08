from flask import Flask, request, jsonify, session, request, redirect
from flask_cors import CORS
import random
import qrcode

from config import API_KEY, DB_URL

from ibmcloudant.cloudant_v1 import CloudantV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

# DATABASE CONNECTION

authenticator = IAMAuthenticator(API_KEY)

service = CloudantV1(authenticator=authenticator)

service.set_service_url(DB_URL)

response = service.get_server_information().get_result()

print(response)


app = Flask(__name__)
app.config['SECRET_KEY'] = '9a63e9b6b22e11eabdab2816a84a348cc0491ea4b22e11eaac1f2816a84a348cc49ad6abb22e11eab6112816a84a348c'
CORS(app)


@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


@app.route('/createline', methods=['POST'])
def createLine():
    code = random.randint(1000, 9999)
    name = request.get_json()['name']
    session['line_operator'] = {"name": name, "code": code}

    # TODO create new waiting line, with code code

    return jsonify({"code": code})

@app.route('/join/<code>')
def join(code):
    # TODO All user to waiting line
    session['customer'] = {"name": "name", "code": code}
    return redirect('/#/waiting')


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

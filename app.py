from flask import Flask, request, jsonify
from flask_cors import CORS
import qrcode

# from config import API_KEY, DB_URL

# from ibmcloudant.cloudant_v1 import CloudantV1
# from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

# # DATABASE CONNECTION

# authenticator = IAMAuthenticator(API_KEY)

# service = CloudantV1(authenticator=authenticator)

# service.set_service_url(DB_URL)

# response = service.get_server_information().get_result()

# print(response)


app = Flask(__name__)
CORS(app)


@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'

@app.route('/createline', methods=['GET'])
def createLine():
    url = "https://next-in-line-rpi.herokuapp.com/"

    qr = GenerateQRCode(url)
    qr.save("code.png") 

    return jsonify({"code": 123})

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

from flask_cors import CORS
from flask import Flask, request, jsonify

from ibmcloudant.cloudant_v1 import CloudantV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

# DATABASE CONNECTION

authenticator = IAMAuthenticator(
    "Nam7uD5Cg04YA4dkxBhurGeEEvy-aTW4HUlH2R8PwrA7")

service = CloudantV1(authenticator=authenticator)

service.set_service_url(
    "https://d170d760-975a-47fc-aff9-232fa364461b-bluemix.cloudantnosqldb.appdomain.cloud")


response = service.get_server_information().get_result()

print(response)


app = Flask(__name__)
CORS(app)


@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


if __name__ == "__main__":
    app.run(debug=True)

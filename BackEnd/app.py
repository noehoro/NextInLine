
from flask_cors import CORS
from flask import Flask, request, jsonify
from config import API_KEY, DB_URL

from ibmcloudant.cloudant_v1 import CloudantV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

# DATABASE CONNECTION

authenticator = IAMAuthenticator(API_KEY)

service = CloudantV1(authenticator=authenticator)

service.set_service_url(DB_URL)

response = service.get_server_information().get_result()

print(response)

response = service.get_all_dbs().get_result()

print(response)


app = Flask(__name__)
CORS(app)


@app.route('/')
def homepage():
    return '<center><img src="https://static.wikia.nocookie.net/f377126c-7717-4026-aa5b-7ca887157442" alt="Hello There!"><br/><img src="https://media.makeameme.org/created/general-kenobi-5b18a9.jpg" alt="General Kenobi!"></center>'


if __name__ == "__main__":
    app.run(debug=True)

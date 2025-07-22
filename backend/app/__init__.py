from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from app.api.sets import IMAGES_ROUTES

def create_app():
    app = Flask(__name__)
    CORS(app)
    api = Api(app)

    api.add_resource(IMAGES_ROUTES, '/set-images')

    return app


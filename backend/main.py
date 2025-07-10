from flask import Flask, json, jsonify, request
from flask_restful import Api, Resource
from flask_cors import CORS

from pokemontcgsdk import Set

sets = Set.all()

app = Flask(__name__)
CORS(app)
api = Api(app)

class IMAGES_ROUTES(Resource):
    def get(self):
        
        result = [{}]
        for set in sets:
            setInfo = {
                "name": set.name,
                "series": set.series,
                "image": set.images.logo
            }

            result.append(setInfo)

        return jsonify(result)

api.add_resource(IMAGES_ROUTES, '/set-images')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)



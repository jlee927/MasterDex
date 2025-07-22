from flask import Flask, json, jsonify, request
from flask_restful import Api, Resource

from pokemontcgsdk import Set

class IMAGES_ROUTES(Resource):
    def get(self):
    #     sets = Set.all()
    #     series_dict = {}

    #     for s in sets:
    #         if s.series not in series_dict:
    #             series_dict[s.series] = {
    #                 'series': s.series,
    #                 'image': s.images.logo  # Pick the first logo encountered
    #             }

    #     return jsonify({'unique_series': list(series_dict.values())})
        pass


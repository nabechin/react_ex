import logging.config

from flask import Flask, make_response, jsonify, request
from flask_cors import CORS, cross_origin


logging.config.fileConfig('api/logging.ini')
logger = logging.getLogger(__name__)


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

post_list = {
             1: {"title": "title1", "content": 'content1'},
             2: {"title": "title2", "content": 'content2'},
             3: {"title": "title3", "content": 'content3'},
             4: {"title": "title4", "content": 'content4'},
             5: {"title": "title5", "content": 'content5'},
             }


@app.route('/', methods=['GET'])
def index():
    response = make_response(jsonify(post_list))
    return response


@app.route('/posts', methods=['POST'])
@cross_origin()
def posts():
    logger.info(request.json)
    post_list[len(post_list) + 1] = request.json
    return make_response(jsonify({len(post_list): post_list[len(post_list)]}))


if __name__ == "__main__":
    app.run()

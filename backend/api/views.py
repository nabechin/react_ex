import logging.config

from flask import Flask, make_response, jsonify, request
from flask_cors import CORS, cross_origin


logging.config.fileConfig('api/logging.ini', disable_existing_loggers=True)
logger = logging.getLogger(__name__)


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

post_list = [
            {"id": 1, "title": "title1", "content": 'content1'},
            {"id": 2, "title": "title2", "content": 'content2'},
            {"id": 3, "title": "title3", "content": 'content3'},
            {"id": 4, "title": "title4", "content": 'content4'},
            {"id": 5, "title": "title5", "content": 'content5'}
            ]


@app.route('/', methods=['GET'])
def index():
    response = make_response(jsonify(post_list))
    return response


@app.route('/posts', methods=['POST'])
@cross_origin()
def posts():
    logger.info(request.json)
    new_post = request.json['id'] = len(post_list)
    post_list.append(new_post)
    return make_response(jsonify(new_post))


@app.route('/posts/<int:id>', methods=['PATCH'])
@cross_origin()
def patch(id):
    logger.info(f"patch id = {id}")
    for post in post_list:
        if post['id'] == id:
            post['title'] = request.json['title']
            post['content'] = request.json['content']
            return make_response(jsonify(post))
    return 'OK'


@app.route('/posts/<int:id>', methods=['DELETE'])
@cross_origin()
def delete(id):
    logger.info(f"delete id = {id}")
    for post in post_list:
        if post['id'] == id:
            post_list.pop(id-1)
            logger.info(post_list)
            return jsonify({'message': 'delete success'}), 200


if __name__ == "__main__":
    app.run()

from flask import Flask, make_response, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def index():
    post_list = {1: {"title": "title1", "content": 'content1'},
                 2: {"title": "title2", "content": 'content2'},
                 3: {"title": "title3", "content": 'content3'},
                 4: {"title": "title4", "content": 'content4'},
                 5: {"title": "title5", "content": 'content5'},
                 }
    response = make_response(jsonify(post_list))
    return response


if __name__ == "__main__":
    app.run()

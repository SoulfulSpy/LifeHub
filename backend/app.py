from flask import Flask
from flask_cors import CORS
from login_api import login_api

app = Flask(__name__)
CORS(app)

# Register the login blueprint
app.register_blueprint(login_api)

if __name__ == '__main__':
    app.run(debug=True)

from flask import Blueprint, request, jsonify
from model import create_user, get_user_by_email_and_password

login_api = Blueprint('login_api', __name__)

@login_api.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    try:
        user_id = create_user(name, email, password)
        return jsonify({'message': 'User registered!', 'user_id': user_id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@login_api.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = get_user_by_email_and_password(email, password)
    if user:
        return jsonify({'message': 'Login successful!'})
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

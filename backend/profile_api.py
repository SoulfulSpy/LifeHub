from flask import Blueprint, request, jsonify
from model import get_user_by_id, update_user_profile
import json

profile_api = Blueprint('profile_api', __name__)

@profile_api.route('/profile/<int:user_id>', methods=['GET'])
def get_profile(user_id):
    user = get_user_by_id(user_id)
    if user:
        return jsonify({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'location': user.location,
            'languages': user.languages,
            'offers': json.loads(user.offers) if user.offers else [],
            'wants': json.loads(user.wants) if user.wants else []
        })
    return jsonify({'error': 'User not found'}), 404

@profile_api.route('/profile/<int:user_id>', methods=['PUT'])
def update_profile(user_id):
    data = request.json
    try:
        update_user_profile(user_id, data)
        return jsonify({'message': 'Profile updated!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

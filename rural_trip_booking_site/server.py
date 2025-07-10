
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

bookings = []

@app.route('/api/book', methods=['POST'])
def book_trip():
    data = request.json
    bookings.append(data)
    return jsonify({'status': 'success', 'message': 'Booking stored'}), 201

@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    return jsonify(bookings)

if __name__ == '__main__':
    app.run(debug=True)

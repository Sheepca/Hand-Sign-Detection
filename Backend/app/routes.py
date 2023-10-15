from flask import request, current_app as app
from flask import jsonify
from werkzeug.utils import secure_filename
from app import app
from .models.ml_model import process_image # This function will do the ML processing
import os

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' in request.files:
        file = request.files['file']
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        return "File saved", 200
    return "No file found", 400

@app.route('/receive_image', methods=['POST'])
def receive_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        recognized_letter = process_image(filepath)
        os.remove(filepath)  # Delete the file after processing

        return jsonify({'recognized_letter': recognized_letter})

    return jsonify({'error': 'File not allowed'}), 400

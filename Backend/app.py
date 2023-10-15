from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World!"

@app.route('/receive_image', methods=['POST'])
def receive_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    image_data = file.read()  # Read the image data from the uploaded file

    recognized_letter = process_image(image_data)

    response_data = {'recognized_letter': recognized_letter}
    return jsonify(response_data)

def process_image(image_data):
    # ML stuff
    # For demonstration purposes, I'm just returning 'char'. 
    # In a real application, you'd replace this with logic to process the image and recognize the letter.
    return 'char'

if __name__ == '__main__':
    app.run(debug=True)

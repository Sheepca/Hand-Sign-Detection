import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-should-change-this'
    UPLOAD_FOLDER = 'uploads'
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
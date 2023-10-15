import cv2
from cvzone.HandTrackingModule import HandDetector
import time
import glob

offset = 30

def get_image_paths(file):
    image_list = []
    for filename in glob.glob('{file}/*.jpg'):
        image_list.append(filename)
    return image_list

def analyze_images(image_paths, file):
	detector = HandDetector(maxHands=1)
	folder = "Data/{file}"
	for image_path in image_paths:
		img = cv2.imread(image_path)
		img = cv2.flip(img, 1)
		hands, img = detector.findHands(img)
		
		if hands:
			hand = hands[0]
			x, y, w, h = hand['bbox']
			imgCrop = img[y-offset:y + h + offset, x-offset:x + w + offset]
			if imgCrop is not None and imgCrop.shape[0] > 0 and imgCrop.shape[1] > 0:
				cv2.imwrite(f'{folder}/Image_{time.time()}.jpg', imgCrop)


fileName = "Y"
images = get_image_paths(fileName)
analyze_images(images, fileName)
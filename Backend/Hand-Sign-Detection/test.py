import cv2
from cvzone.HandTrackingModule import HandDetector
from cvzone.ClassificationModule import Classifier
import numpy as np
import math

offset = 30
imgSize = 300
labels = ["A", "B", "C", "D", "E", "F", "G", "H/KOREAN: YUH", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "I Love You", "A", "N", "O", "YUH"]

def disp_hand():
	cam = cv2.VideoCapture(1)
	if cam.read()[0]==False:
		cam = cv2.VideoCapture(0)

	detector = HandDetector(maxHands=1)
	classifier = Classifier("Backend/Hand-Sign-Detection/Model/keras_model.h5", "Backend/Hand-Sign-Detection/Model/labels.txt")

	while True:
		img = cam.read()[1]
		img = cv2.flip(img, 1)
		imgOutput = img.copy()
		hands, img = detector.findHands(img)
		
		if hands:
			hand = hands[0]
			x, y, w, h = hand['bbox']
			
			imgWhite = np.ones((imgSize, imgSize, 3), np.uint8) * 255
			imgCrop = img[y-offset:y + h + offset, x-offset:x + w + offset]
			
			aspectRatio = h/w
			if x >= offset and y >= offset and x + w + offset <= img.shape[1] and y + h + offset <= img.shape[0]:
				if aspectRatio > 1:
					k = imgSize / h 
					wCal = math.ceil(k * w)
					imgResize = cv2.resize(imgCrop, (wCal, imgSize))
					imgResizeShape = imgResize.shape
					wGap = math.ceil((imgSize-wCal)/2)
					imgWhite[:, wGap:wCal+wGap] = imgResize
				else:
					k = imgSize / w 
					hCal = math.ceil(k * h)
					imgResize = cv2.resize(imgCrop, (imgSize, hCal))
					imgResizeShape = imgResize.shape
					hGap = math.ceil((imgSize-hCal)/2)
					imgWhite[hGap:hCal + hGap, :] = imgResize

			prediction, index = classifier.getPrediction(imgWhite)
			label = labels[index]
			if index < 25:
				label = "ASL: " + label
			else:
				label = "KSL: " + label
			cv2.rectangle(imgOutput, (x - offset, y - offset - 100),(x - offset + 90, y - offset), (255, 0, 255), cv2.FILLED) 	
			cv2.rectangle(imgOutput, (x - offset, y - offset), (x + w + offset, y + h + offset), (255, 0 , 255), 4)
			cv2.putText(imgOutput, label, (x, y - 26), cv2.FONT_HERSHEY_COMPLEX, 1.7, (255, 255, 255), 2)

		cv2.imshow("Image", imgOutput)
		cv2.waitKey(1)
	cam.release()
	cv2.destroyAllWindows()


disp_hand()
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const uploadImage = async (imageUri) => {
    let formData = new FormData();

    // Split the URI to get the file name
    let uriParts = imageUri.split('/');
    let fileName = uriParts[uriParts.length - 1];

    // Append the image file to the FormData
    formData.append('photo', {
      uri: imageUri,
      name: fileName,
      type: 'image/jpg',
    });

    try {
      // Send the image to your Flask backend
      let response = await axios.post('http://10.19.216.237:5000/upload', formData);
      console.log('Image Uploaded', response.data);
    } catch (error) {
      if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Data:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          console.error('Request:', error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
      }
      console.error(error.config);
  };
}

  const captureImage = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Captured Photo URI:', photo.uri); // Add this line for debugging
      uploadImage(photo.uri);  // Upload the captured image
    }
  };
  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View style={styles.captureContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flipContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
            <Text style={styles.buttonText}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}


const styles = StyleSheet.create({
    captureContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 30
    },
    captureButton: {
      width: 70, 
      height: 70, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      borderRadius: 35, // Half of width/height to make it round
    },
    flipContainer: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      backgroundColor: 'transparent',
    },
    flipButton: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 20,
    },
    buttonText: {
      color: 'white',
    },
});
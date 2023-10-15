import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

function Screen2() {
    return (
        <View style={styles.container}>
            <Text>Camera on Screen 2</Text>
            <RNCamera
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
    },
});

export default Screen2;

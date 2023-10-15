import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Screen1() {
    return (
        <View style={styles.container}>
            <Text>Screen 1 Content</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});

export default Screen1;
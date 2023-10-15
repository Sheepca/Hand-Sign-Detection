import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Screen1() {

  return (
    <View style={styles.container}>
      <View style={styles.textBoxContainer}>
        <Text style={styles.textBox}>Translation: </Text>
      </View>

      <View style={styles.prevBoxContainer}>
        <Text style={styles.prevText}>Previous Translations:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6C8FF',
    padding: 30,
  },
  textBoxContainer: {
    width: '100%',
    backgroundColor: '#f7f7f7', // Lighter gray
    padding: 15,
    borderWidth: 1,
    borderColor: '#d1d1d1',  // Subtle border
    borderRadius: 10, // Rounded corners
    marginBottom: 10,
    shadowColor: "#000", // Shadows for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  textBox: {
    fontSize: 16,
  },
  prevBoxContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
    borderWidth: 1,
    borderColor: '#d1d1d1',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  prevText: {
    fontSize: 16,
  },
});

export default Screen1;


import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';



function Screen1() {
    let text  = "ooga booga"; 
    let table = [];
    useEffect(() => {
        sendText(text);
        buildTable();
      }, []);
    return (
        <View style={translate.container}>
            <View style={translate.textBoxContainer}>
                 <Text style={translate.textBox}>Translation: </Text>
            </View>
        </View>
        // <View style={styles.container}>
        //    <Text>{text}</Text>
        //    <Text>{table}</Text>
        // </View>
    );
}

const translate = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray', // Background color of the screen
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 30,
      },
      textBoxContainer: {
        width: '100%', // Adjust the width as needed
        backgroundColor: 'white', // Background color of the box
        padding: 15,
        borderWidth: 1,
        borderColor: 'blue', // Border color
        borderRadius: 5, // Border radius for rounded corners
      },
      textBox: {
        fontSize: 16,
      },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});

sendText = (text) => {
    fetch("/api/saveTranslation", {method: "POST", body: text, headers: {'Content-Type': "application/json"}})
}

buildTable = () => {
    fetch("/api/listSaved", {method: "POST", headers: {'Content-Type': "application/json"}})
    .then(data => {
        list = [];
        for (item in data) {
            list.push(
                <View>
                    <Text>{item}</Text>
                </View>
            )
        }   
        table = list;
    });
}

export default Screen1;
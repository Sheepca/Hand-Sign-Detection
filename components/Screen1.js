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
        
        <View style={styles.container}>
           <Text>{text}</Text>
           <Text>{table}</Text>
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
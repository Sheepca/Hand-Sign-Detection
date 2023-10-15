import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';



function Screen1() {
    useEffect(() => {
        fetch("/api/listSaved");
    //     fetch("/api/newDraft", {method: "POST", body: body, headers: {'Content-Type': "application/json"}})
    // .then(this.newDraftRes)
      }, []);
    return (
        
        <View style={styles.container}>
           <Text>{text}</Text>
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
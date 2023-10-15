import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, activeTab,fontLoaded,ActivityIndicator } from 'react-native';



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
            <View style = {styles.container}>
            <View style={styles.container}>
                <View style={dividers.tabs}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'Contacts' ? dividers.container : null]}
                        onPress={() => navigation.navigate('Contacts')}
                    >
                        <Text style={styles.tabButtonText}>previous translations: </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'Dial' ? styles.activeTab : null]}
                        onPress={() => navigation.navigate('Dial')} // Navigate to 'Dial' when 'Dial' tab is clicked
                    >
                    </TouchableOpacity>
                </View>
                <View style={styles.contactsContainer}>
                    {fontLoaded ? (
                        <ScrollView>
                            {activeTab === 'Contacts' ? (
                                <View>
                                    <Text style={[styles.groupTitle, { color: '#5267B3', textAlign: '' }]}>Contacts</Text>
                                    {Object.keys(groupedContacts)
                                        .sort()
                                        .map((letter) => (
                                            <View key={letter}>
                                                <Text style={[styles.groupTitle, { color: '#5267B3', textAlign: 'left' }]}>{letter}</Text>
                                                {groupedContacts[letter].map((contact) => renderContactItem(contact))}
                                            </View>
                                        ))}
                                </View>
                            ) : null}
                        </ScrollView>
                    ) : (
                        <ActivityIndicator size="large" color="#9E896A" />
                    )}
                </View>
            </View>
            </View>
        </View>
    );
}

const translate = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6C8FF', // Background color of the screen
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 30,
      },
      textBoxContainer: {
        width: '100%', // Adjust the width as needed
        backgroundColor: '#ededed', // Background color of the box
        padding: 15,
        borderWidth: 1,
        borderColor: 'blue', // Border color
        borderRadius: 5, // Border radius for rounded corners
      },
      textBox: {
        fontSize: 16,
      },
});

const dividers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6C8FF',
        borderWdith: 1,
        borderColor: 'blue',
        borderRadius: 5,
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'top',
        alignItems: 'top',
        // backgroundColor: '#f0f0f0',
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
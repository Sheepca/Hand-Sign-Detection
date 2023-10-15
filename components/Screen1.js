import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

function Screen1({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(true); // You should set the actual font loading state
  const [activeTab, setActiveTab] = useState('Contacts'); // Define and set the active tab state
  const [groupedContacts, setGroupedContacts] = useState({}); // Define the grouped contacts state

  const text = "ooga booga";
  const table = [];

  useEffect(() => {
    // Simulated data (you can replace this with actual data fetching)
    const groupedContactsData = {
      A: ['Alice', 'Amy'],
      B: ['Bob'],
    };

    setGroupedContacts(groupedContactsData);
    // Build table here if needed
  }, []);

  return (
    <View style={translate.container}>
      <View style={translate.textBoxContainer}>
        <Text style={translate.textBox}>Translation: {text}</Text>
      </View>

      <View style={styles.container}>
        <View style={dividers.container}>
          <Text
            // style={[styles.tabButton, activeTab === 'Contacts' ? dividers.container : null]}
            // onPress={() => setActiveTab('Contacts')}
          >
            <Text style={styles.prevBoxContainer}>previous translations: </Text>
          </Text>
          <Text

            // onPress={() => navigation.navigate('Dial')}
          >
          </Text>
        </View>
        <View style={styles.contactsContainer}>
            {/* <ActivityIndicator size="large" color="#9E896A" /> */}
        </View> 
      </View>
    </View>
  );
}

const translate = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6C8FF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 30,
  },
  textBoxContainer: {
    width: '100%',
    backgroundColor: '#ededed',
    padding: 15,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
  textBox: {
    fontSize: 16,
  },
});

const dividers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6C8FF',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'top', // Should be 'flex-start'
    alignItems: 'top', // Should be 'flex-start'
  },
  textBoxContainer: {
    width: '100%',
    backgroundColor: '#ededed',
    padding: 15,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    fontSize: 16,
  },
  prevBoxContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  tabButton: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 5,
  },
  contactsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupTitle: {
    color: '#5267B3',
    textAlign: 'left',
  },
});

export default Screen1;

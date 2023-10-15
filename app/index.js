import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import createNativeStackNavigator
import Screen1 from '../components/Screen1'; // Import your screen components
import CameraScreen from '../components/camerascreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator(); // Create a Stack Navigator

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{ headerTitle: 'Sign Language Translator' }} // Specify the header title
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Translation"
        component={Screen1}
        options={{ headerTitle: 'Translation' }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerTitle: 'Camera' }}
      />
    </Tab.Navigator>
  );
};

export default Home;

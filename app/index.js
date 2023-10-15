import { useState } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter, HomeScreen } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';
import { View } from 'react-native-web';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Screen1 from '../components/Screen1'; // Import your screen components
import CameraScreen from '../components/camerascreen'

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    const router = useRouter();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Screen1} />
            <Tab.Screen name="Tab2" component={CameraScreen} />
        </Tab.Navigator>
    );
}

export default Home;
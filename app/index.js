import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import {Stack, useRouter} from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightwhite}}>
            <Stack.Screen
              options={{
                headerStyle: {backgroundColor: COLORS.lightWhite}, headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl = {icons.profile} dimension = "100%" />
                ),
                headerTitle: ""
            }}
        />
        </SafeAreaView>
    )
}

export default Home;
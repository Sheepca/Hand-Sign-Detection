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
        options={{
            headerTitle: 'Sign Language Translator',
            headerStyle: {
                backgroundColor: '#4B2E83',  // This sets the background color to light purple
            },
            headerTintColor: '#FFD700'  // This sets the color of the header title to gold
        }}
        />
    </Stack.Navigator>

  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Translations"
        component={Screen1}
        options={{
          // Customize options for "Saved Translations" tab
        }}
      />
      <Tab.Screen name="Camera" component={CameraScreen} />
    </Tab.Navigator>
  );
}

export default Home;


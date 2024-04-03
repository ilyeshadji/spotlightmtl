import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen.tsx';
import LandingScreen from '../Screens/LandingScreen.tsx';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Home: undefined;
};

function MainNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                component={LandingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'Home'}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default MainNavigation;

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../Screens/Landing/LandingScreen.tsx';
import HomeTabs from './HomeNavigation.tsx';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Home: {
        screen: string;
    };
};

function LandingNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Landing'}
                component={LandingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'Home'}
                component={HomeTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default LandingNavigation;

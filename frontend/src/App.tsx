import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LandingNavigation from './Navigation/LandingNavigation.tsx';
import LocalStorage from './plugins/LocalStorage.ts';
import Toast from 'react-native-toast-message';

export function App(): React.JSX.Element {
    return (
        <>
            <NavigationContainer>
                <LandingNavigation />
            </NavigationContainer>
            <Toast />
        </>
    );
}

export const Storage = new LocalStorage();

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Navigation/MainNavigation.tsx';
import LocalStorage from './plugins/LocalStorage.ts';
import Toast from 'react-native-toast-message';

export function App(): React.JSX.Element {
    return (
        <>
            <NavigationContainer>
                <MainNavigation />
            </NavigationContainer>
            <Toast />
        </>
    );
}

export const Storage = new LocalStorage();

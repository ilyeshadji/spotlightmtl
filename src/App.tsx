import React from 'react';
// @ts-ignore
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '@env';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Navigation/MainNavigation.tsx';
import { Auth0Provider } from 'react-native-auth0';

function App(): React.JSX.Element {
    return (
        <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
            <NavigationContainer>
                <MainNavigation />
            </NavigationContainer>
        </Auth0Provider>
    );
}

export default App;

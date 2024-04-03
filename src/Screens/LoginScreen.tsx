import * as React from 'react';
import styled from 'styled-components/native';

import ScreenContainer from '../Components/UI Elements/ScreenContainer.tsx';
import { useAuth0 } from 'react-native-auth0';

function LoginScreen() {
    const { authorize } = useAuth0();

    async function login() {
        try {
            const response = await authorize();
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <ScreenContainer>
            <Text style={{ color: 'black' }} onPress={login}>
                Login Screen
            </Text>
        </ScreenContainer>
    );
}

const Text = styled.Text`
    color: black;
`;

export default LoginScreen;

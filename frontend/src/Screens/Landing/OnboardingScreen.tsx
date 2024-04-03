import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import ScreenContainer from '../../Components/UI Elements/ScreenContainer.tsx';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/LandingNavigation.tsx';
import Toaster from '../../plugins/Toaster.ts';
import { Storage } from '../../App.tsx';

function OnboardingScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [PIN, setPIN] = useState('');
    const [input, setInput] = useState('');
    const [pinConfirmed, setPinConfirmed] = useState(false);

    async function onConfirmPressed() {
        if (!pinConfirmed) {
            setPIN(input);
            setInput('');
            setPinConfirmed(true);
            return;
        }

        if (PIN === input) {
            await Storage.setPIN(PIN);
            navigation.navigate('Home', { screen: 'Home' });
            return;
        }

        Toaster.error({
            text1: 'Wrong PIN',
            text2: 'Please enter two PINs that are the same',
        });

        setInput('');
        setPIN('');
        setPinConfirmed(false);
    }

    return (
        <ScreenContainer>
            <Text>Welcome to Spotlight Montreal</Text>

            {pinConfirmed ? (
                <Text>Confirm PIN</Text>
            ) : (
                <Text>To start using the app, simply create a PIN below</Text>
            )}

            <TextInput
                onChangeText={(value) => setInput(value)}
                value={input}
                placeholder="*****"
                placeholderTextColor={'black'}
                keyboardType="numeric"
                maxLength={5}
            />

            <ConfirmButton
                onPress={onConfirmPressed}
                disabled={input.length < 5}
            >
                <Text>Confirm</Text>
            </ConfirmButton>
        </ScreenContainer>
    );
}

const Text = styled.Text`
    color: black;
    margin: 0 0 20px 0;
`;

const TextInput = styled.TextInput`
    justify-content: center;
    align-items: center;
    color: black;
`;

const ConfirmButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 0;
`;

export default OnboardingScreen;

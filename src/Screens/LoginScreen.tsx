import * as React from 'react';
import styled from 'styled-components/native';
import ScreenContainer from '../Components/UI Elements/ScreenContainer.tsx';
import { useState } from 'react';
import { Storage } from '../App.tsx';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/MainNavigation.tsx';
import Toaster from '../plugins/Toaster.ts';
import { Keyboard } from 'react-native';

function LoginScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [input, setInput] = useState('');

    function onChangeText(value: string) {
        if (value.length === 5) {
            Keyboard.dismiss();
            if (value === Storage.PIN) {
                navigation.navigate('Home');
                return;
            }

            Toaster.error({
                text1: 'Wrong password',
                text2: 'Please enter the correct password to get to your events.',
            });
        }

        setInput(value);
    }

    return (
        <ScreenContainer>
            <Text>Enter your PIN to see your events</Text>

            <TextInput
                onChangeText={onChangeText}
                value={input}
                placeholder="*****"
                placeholderTextColor={'black'}
                keyboardType="numeric"
                maxLength={5}
            />
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
export default LoginScreen;

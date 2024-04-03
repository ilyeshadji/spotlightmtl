import * as React from 'react';
import styled from 'styled-components/native';

import { Storage } from '../App.tsx';
import OnboardingScreen from './OnboardingScreen.tsx';
import LoginScreen from './LoginScreen.tsx';
import { useSelector } from 'react-redux';
import { selectInitStatus } from '../store/selectors.ts';
import Loader from '../Components/UI Elements/Loader.tsx';

function LandingScreen() {
    const PIN = Storage.PIN;
    const isLoading = useSelector(selectInitStatus);

    if (isLoading) {
        return <Loader />;
    }

    if (!PIN) {
        return <OnboardingScreen />;
    }

    return <LoginScreen />;
}

const Text = styled.Text`
    color: black;
`;

export default LandingScreen;

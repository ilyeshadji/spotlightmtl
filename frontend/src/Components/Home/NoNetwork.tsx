import * as React from 'react';
import styled from 'styled-components/native';
import ScreenContainer from '../UI Elements/ScreenContainer.tsx';

function NoNetwork() {
    return (
        <ScreenContainer>
            <Text>
                Look like you are not connected to the internet. Don't worry,
                you can still see your saved events if you click on the Events
                tab
            </Text>
        </ScreenContainer>
    );
}

const Text = styled.Text`
    padding: 30px;
    color: black;
    text-align: center;
`;

export default NoNetwork;

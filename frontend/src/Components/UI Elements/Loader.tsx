import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

function Loader() {
    return (
        <Container>
            <ActivityIndicator size={'large'} color={'#0000ff'} />
        </Container>
    );
}

const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default Loader;

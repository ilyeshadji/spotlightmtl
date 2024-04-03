import * as React from 'react';
import styled from 'styled-components/native';

interface Props {
    children: React.ReactNode;
}

function ScreenContainer({ children }: Props) {
    return <Container>{children}</Container>;
}

const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ScreenContainer;

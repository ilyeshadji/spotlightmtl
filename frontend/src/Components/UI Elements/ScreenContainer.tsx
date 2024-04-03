import * as React from 'react';
import styled from 'styled-components/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

interface Props {
    children: React.ReactNode;
}

function ScreenContainer({ children }: Props) {
    function onPress() {
        Keyboard.dismiss();
    }

    // return (
    //     <TouchableWithoutFeedback onPress={onPress} accessible={false}>
    //         <Container>{children}</Container>
    //     </TouchableWithoutFeedback>
    // );

    return <Container>{children}</Container>;
}

const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`;

export default ScreenContainer;

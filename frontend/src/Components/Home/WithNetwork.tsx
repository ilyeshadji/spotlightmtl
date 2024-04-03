import * as React from 'react';
import styled from 'styled-components/native';
import ScreenContainer from '../UI Elements/ScreenContainer.tsx';
import Event, { EventType } from '../Events/Event.tsx';

interface Props {
    events: EventType[];
}

function WithNetwork({ events }: Props) {
    return (
        <ScreenContainer>
            <HomeScreenText>Home Screen</HomeScreenText>

            <ScrollView>
                {events.map((event: EventType) => (
                    <Event event={event} key={event._id} />
                ))}
            </ScrollView>
        </ScreenContainer>
    );
}

const HomeScreenText = styled.Text`
    margin: 30px 0 0 0;
    padding: 0 0 20px 0;
    color: black;
`;

const ScrollView = styled.ScrollView`
    padding: 10px;
`;

export default WithNetwork;

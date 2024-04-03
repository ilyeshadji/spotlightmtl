import * as React from 'react';
import styled from 'styled-components/native';
import { Utils } from '../../utils';

export type EventType = {
    _id: string;
    title: string;
    status: 'COMING' | 'PASSED' | 'DELETED';
    description?: string;
    organizer: string;
    date: Date;
    attendeesNumber: number;
    cost?: number;
    address: string;
};

interface Props {
    event: EventType;
}

function Event({ event }: Props) {
    return (
        <Container>
            <Title>{event.title}</Title>
            <Text>{event.status}</Text>
            <Text>{event.description}</Text>
            <Text>{event.organizer}</Text>
            <Text>{Utils.dateHuman(event.date)}</Text>
            <Text>{event.attendeesNumber}</Text>
            <Text>{event.cost}</Text>
            <Text>{event.address}</Text>
        </Container>
    );
}

const Container = styled.View`
    display: flex;
    margin: 10px 0 10px 0;
    padding: 10px 10px 10px 20px;
    border: 1px solid grey;
    border-radius: 20px;
`;

const Title = styled.Text`
    color: black;
`;

const Text = styled.Text`
    color: black;
`;

export default Event;

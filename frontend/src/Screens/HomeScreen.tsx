import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import Toaster from '../plugins/Toaster.ts';
import { eventApi } from '../api';
import ScreenContainer from '../Components/UI Elements/ScreenContainer.tsx';
import Event, { EventType } from '../Components/Events/Event.tsx';
import { AxiosError } from 'axios';
import Loader from '../Components/UI Elements/Loader.tsx';
import NoNetwork from '../Components/Home/NoNetwork.tsx';
import WithNetwork from '../Components/Home/WithNetwork.tsx';

function HomeScreen() {
    const [events, setEvents] = useState([]);
    const [hasConnection, setHasConnection] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            getEvents();
        }

        return () => {
            ignore = true;
        };
    }, []);

    async function getEvents() {
        try {
            const response = await eventApi.getAll();
            setEvents(response.data);
        } catch (e) {
            if (e instanceof AxiosError && !e.response) {
                // Network error
                setHasConnection(false);
            } else {
                Toaster.error({
                    text1: 'Something went wrong.',
                    text2: 'Could not fetch events',
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <Loader />;
    }

    if (!hasConnection) {
        return <NoNetwork />;
    }

    return <WithNetwork events={events} />;
}

export default HomeScreen;

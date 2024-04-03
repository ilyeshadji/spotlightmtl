import { Text, View } from 'react-native';
import styled from 'styled-components/native';

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <HomeScreenText>Home Screen</HomeScreenText>
        </View>
    );
}

const HomeScreenText = styled.Text`
    color: black;
`;

export default HomeScreen;

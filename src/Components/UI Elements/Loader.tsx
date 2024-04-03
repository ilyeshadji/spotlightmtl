import * as React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

function Loader() {
    return <ActivityIndicator size={'large'} color={'#0000ff'} />;
}

export default Loader;

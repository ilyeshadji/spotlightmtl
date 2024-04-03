import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen.tsx';
import MyEventsScreen from '../Screens/Home/MyEventsScreen.tsx';
import ProfileScreen from '../Screens/Home/ProfileScreen.tsx';

const Tab = createBottomTabNavigator();

const screenOptions = {
    // tabBarStyle: {
    //     height: 50,
    //     position: 'absolute',
    //     bottom: 50, // Adjusted bottom margin
    //     left: 0,
    //     right: 0,
    //     borderTopWidth: 1, // Ensure a border is visible to separate content from the tab bar
    //     borderTopColor: '#ccc', // Border color
    // },
    // tabBarItemStyle: {
    //     margin: 5,
    //     borderRadius: 10,
    // },
};

function HomeTabs() {
    return (
        <Tab.Navigator {...{ screenOptions }}>
            <Tab.Screen
                name="My Events"
                component={MyEventsScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabs;

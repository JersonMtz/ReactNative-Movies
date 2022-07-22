import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/DetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { IMovie } from '../interfaces/IMovieDB';

// Types navigation params

export type RootStackParams = {
    HomeScreen: undefined;
    DetailsScreen: IMovie;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="DetailsScreen" component={ DetailsScreen } />
        </Stack.Navigator>
    );
}
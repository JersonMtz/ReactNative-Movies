import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeInScreen = () => {

    const { opacity, animateFade } = useFade();

    useEffect(() => {
        
        animateFade(1, 2000);

    }, []);
    

    return (
        <View style={{
            backgroundColor: 'gray',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <Animated.View style={{
                backgroundColor: 'green',
                borderColor: 'white',
                borderWidth: 10,
                width: 100,
                height: 100,
                opacity
            }} 
            />
        </View>
    )
}
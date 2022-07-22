import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = (initial: number = 0) => {
    
    const opacity = useRef(new Animated.Value(initial)).current;

    const animateFade = (toValue: number | Animated.Value, duration: number = 500, callback?: Function ) => {
        Animated.timing(
            opacity,
            {
                toValue,
                duration,
                useNativeDriver: true
            }
        ).start(() => callback ? callback() : null);
    }

    return {
        opacity,
        animateFade
    }
}

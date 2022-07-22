import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../contexts/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Gradient = ({ children }: Props) => {

    const { nowColors, nextColors, nowFnColor } = useContext(GradientContext);
    const { opacity, animateFade } = useFade();

    useEffect(() => {

        animateFade(1, 800, () => { 
            nowFnColor(nextColors);
            animateFade(0, 800);
        });
    
    }, [nextColors]);
    

    return (
        <View style={{
            flex: 1
        }}>
            <LinearGradient
                colors={ [nowColors.primary, nowColors.secondary, '#032541'] }
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.9, y: 0.9 }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}>
                <LinearGradient
                    colors={ [nextColors.primary, nextColors.secondary, '#032541'] }
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.9, y: 0.9 }}
                />
            </Animated.View>

            { children }
        </View>
    )
}
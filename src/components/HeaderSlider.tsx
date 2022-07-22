import React, { useContext, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from './MoviePoster';
import { getColors } from '../helpers/getColors';
import { GradientContext } from '../contexts/GradientContext';

const { width } = Dimensions.get('window');

export const HeaderSlider = () => {
    
    const { top } = useSafeAreaInsets();
    const  { loading, movies } = useMovies('/now_playing');
    const { nextFnColor } = useContext(GradientContext);

    useEffect(() =>{

        if (movies.length > 0) {
            changeColor(0);
        }

    }, [movies]);

    const changeColor = async (index: number) => {
        const { primary = 'yellow', secondary = 'white' } = await getColors(movies[index]);
        nextFnColor({ primary, secondary });
    }

    if (loading) {
        return (
            <ActivityIndicator
                style={{ justifyContent: 'center', flex: 1 }}
                color={ 'green' }
                size={ 50 }
            />
        );
    }

    return (
        <View style={{ paddingVertical: top + 10 }}>
            
            <View style={ styles.badge }>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    En cines
                </Text>
            </View>

            <Carousel
                data={ movies }
                renderItem={({ item }) => (<MoviePoster size="big" movie={ item } />)}
                sliderWidth={ width }
                itemWidth={ width * 0.71 }
                onSnapToItem={ changeColor }
            />

        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'center', 
        backgroundColor: '#08090B', 
        borderRadius: 10, 
        marginBottom: 10, 
        paddingVertical: 5,
        width: '15%' 
    },
});
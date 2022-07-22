import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IMovie } from '../interfaces/IMovieDB';

// interface Props extends IMovie {
//     size: 'big' | 'small';
// }

interface Props {
    movie: IMovie;
    size: 'big' | 'small';
}

const { width, height } = Dimensions.get('window');

export const MoviePoster = ({ movie, size }: Props) => {

    const { navigate } = useNavigation();
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    return (
        <TouchableOpacity
            onPress={ () => navigate('DetailsScreen' as never, movie as never) }
        >
            <View style={[ styles.container, (size === 'big') ? styles.big : styles.small ]}>
                <Image 
                    style={ styles.image }
                    source={{ uri }}
                    />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 5,
        backgroundColor: 'transparent',
        borderRadius: 10
    },

    big: {
        height: height * 0.46,
        width: width * 0.71
    },

    small: {
        marginHorizontal: 10,
        height: height * 0.20,
        width: width * 0.20
    },

    image: {
        flex: 1,
        borderRadius: 10
    }
});
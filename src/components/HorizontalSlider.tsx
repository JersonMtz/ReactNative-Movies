import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { MoviePoster } from './MoviePoster'
import { IMovie } from '../interfaces/IMovieDB'

interface Props {
    title?: string;
    movies: IMovie[];
}

const { height } = Dimensions.get('window');

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={ styles.container }>

            { title && 
                <Text style={ styles.title }>
                    { title }
                </Text>
            }

            <FlatList
                data={ movies }
                renderItem={({ item }) => (<MoviePoster size="small" movie={ item } />)}
                showsHorizontalScrollIndicator={ false }
                horizontal
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.30,
        paddingTop: 15,
    },

    title: {
        // color: '#23262E',
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingLeft: 10,
        marginBottom: 8
    }
});
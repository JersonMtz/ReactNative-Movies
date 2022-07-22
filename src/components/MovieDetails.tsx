import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, FlatList } from 'react-native';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { IMovie } from '../interfaces/IMovieDB';
import { Cast } from './Cast';

interface Props {
    movie: IMovie;
}

export const MovieDetails = ({ movie }: Props) => {

    const { loading, cast } = useMovieDetails(movie.id);

    if (loading) {
        return (
            <ActivityIndicator 
                color="green"
                size={ 40 }
                style={{ flex: 1, marginTop: 10 }}
            />
        );
    }

    return (
        <View style={{ paddingHorizontal: 15 }}>

            <Text style={ styles.title }>Historia</Text>
            <Text style={ styles.paragraph }>{ movie.overview }</Text>

            <Text style={ styles.title }>Autores</Text>
            <FlatList
                style={{ paddingVertical: 10 }}
                data={ cast }
                renderItem={ ({ item }) => (<Cast person={ item }/>) }
                showsHorizontalScrollIndicator={ false }
                horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
        textDecorationLine: 'underline'
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'justify',
        paddingBottom: 15
    }
});
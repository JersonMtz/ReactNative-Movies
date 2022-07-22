import React from 'react';
import { View, ScrollView } from 'react-native';
import { Author } from '../components/Author';
import { Gradient } from '../components/Gradient';
import { HeaderSlider } from '../components/HeaderSlider';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';

// interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = () => {
    
    const { movies: popular } = useMovies('/popular');
    const { movies: top_rated } = useMovies('/top_rated');
    const { movies: upcoming } = useMovies('/upcoming');

    return (
        <Gradient>
            <ScrollView>
                <View>

                    <HeaderSlider />

                    <HorizontalSlider title="Películas Populares" movies={ popular }/>
                    
                    <HorizontalSlider title="Top ranking" movies={ top_rated }/>

                    <HorizontalSlider title="Próximos estrenos" movies={ upcoming }/>

                </View>
                <Author />
            </ScrollView>
        </Gradient>
    )
}


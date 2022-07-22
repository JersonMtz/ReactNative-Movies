import React, { useContext, useEffect, useRef, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../routes/StackNavigator';
import { MovieDetails } from '../components/MovieDetails';
import { Author } from '../components/Author';

import { getColors } from '../helpers/getColors';
import { GradientContext } from '../contexts/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> { }

const { height } = Dimensions.get('window');

export const DetailsScreen = ({ route, navigation }: Props) => {

    const { nextColors, nextFnColor } = useContext(GradientContext);
    const prevPrimary = useRef(nextColors.primary);
    const movie= route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
    const { opacity, animateFade } = useFade(1)
    const [colors, setColors] = useState({
        primary: 'transparent',
        secondary: 'transparent'
    });

    useEffect(() => {

        getColors(movie)
            .then(({ primary, secondary }) => {
                if (primary && secondary) {
                    setColors({ primary, secondary });
                    nextFnColor({
                        ...nextColors,
                        primary,
                    });
                    animateFade(0);
                }
            });
            
        return () => {
            nextFnColor({
                ...nextColors,
                primary: prevPrimary.current,
            });
        }
    }, []);
    

    return (
        <View>
            <LinearGradient
                colors={ [colors.primary, colors.secondary, '#032541'] }
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.9, y: 0.9 }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}>
                <LinearGradient
                    colors={ [nextColors.primary, nextColors.secondary, '#032541'] }
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                />
            </Animated.View>
            
            <View style={{ position: 'absolute', zIndex: 999, padding: 15 }}>
                <TouchableOpacity
                    onPress={ () => navigation.goBack() }>
                    <Text>
                        <Icon 
                            name="arrow-back-outline" 
                            size={ 40 } 
                            color="#ffffff" 
                        />;
                    </Text>  
                </TouchableOpacity>
            </View>

            <ScrollView>

                <View style={ styles.imageContainer }>
                    <Image
                        style={ styles.image }
                        source={{ uri }}
                        />
                </View>
                
                <View style={{ padding: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={ styles.subTitle }>{ movie.original_title }</Text>
                        <Text style={ styles.badge }>⭐ { movie.vote_average }</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={ styles.title }>{ movie.title }</Text>

                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Estreno: </Text>
                            <Text style={{ color: 'white' }}>{ movie.release_date }</Text>
                        </View>
                    </View>
                </View>

                <MovieDetails movie={ movie }/>

                <Author />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: height * 0.7,
        width: '100%',
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
        borderRadius: 25
    },
    image: {
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flex: 1
    },
    badge: {
        backgroundColor: '#08090B', 
        borderRadius: 10, 
        color: 'white',
        paddingVertical: 2,
        textAlign: 'center',
        maxWidth: '15%',
        width: '12%'
    },
    subTitle: {
        // color: '#6A6F73',
        color: 'white',
        fontSize: 14,
        maxWidth: '60%'
    },
    title: {
        // color: 'black',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        maxWidth: '60%',
        paddingTop: 10
    }
});
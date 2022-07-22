import React from 'react';
import { View, Text, Image } from 'react-native';
import { ICast } from '../interfaces/IMovieCredits';

interface Props {
    person: ICast;
}

export const Cast = ({ person: cast }: Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${ cast.profile_path }`;

    return (
        <View style={{ flexDirection: 'row', borderRadius: 10, paddingHorizontal: 5 }}>
                <View>
                    <Image 
                        source={ (cast.profile_path) ? { uri } : require('../assets/img/author.webp') }
                        style={{
                            width: 80,
                            height: 80,
                            borderTopLeftRadius: 100,
                            borderBottomLeftRadius: 100,
                            borderTopRightRadius: 100,
                            borderBottomRightRadius: 100,
                            zIndex: 1
                        }}
                    />
                </View>
                <View style={{ 
                    backgroundColor: 'black', 
                    alignSelf: 'center', 
                    padding: 10, 
                    marginLeft: -15,
                    borderRadius: 10
                }}>
                    <Text style={{ color: '#999999', textAlign: 'center', fontWeight: 'bold', paddingLeft: 15  }}>{ cast.character }</Text>
                    <Text style={{ color: 'white' , textAlign: 'center', paddingLeft: 15  }}>{ cast.name }</Text>
                </View>
            </View>
    )
}
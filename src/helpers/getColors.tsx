import ImageColors from 'react-native-image-colors';
import { IMovie } from '../interfaces/IMovieDB';

export const getColors = async ({ poster_path }: IMovie) => {

    const uri = `https://image.tmdb.org/t/p/w500${ poster_path }`;
    const result = await ImageColors.getColors(uri, {});
    let primary, secondary;

    switch (result.platform) {
        case 'android':
            primary = result.darkVibrant;
            secondary = result.vibrant
            break
        case 'ios':
            primary = result.primary;
            secondary = result.secondary;
            break
        default:
            throw new Error('Unexpected platform key')
    }

    return { primary, secondary }
} 
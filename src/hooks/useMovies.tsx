import { useEffect, useState } from 'react';
import movieAPI from '../api/movieAPI';
import { IMovieDB, IMovie } from '../interfaces/IMovieDB';

const getMovies = async (url: string): Promise<IMovie[]> => {

    const { data: { results }} = await movieAPI.get<IMovieDB>(url);
    return results;

}

export const useMovies = (url: string) => {
    
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getMovies(url)
        .then(res => {

            setMovies(res);
            setLoading(false);
        });

    }, []);
    
    return {
        loading, 
        movies
    }
    
}

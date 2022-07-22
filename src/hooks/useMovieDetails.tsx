import { useEffect, useState } from 'react';
import movieAPI from '../api/movieAPI';
import { IMovieCredits, ICast } from '../interfaces/IMovieCredits';

interface typeState {
    loading: boolean; 
    cast: ICast[];
}

const getMovieCredits = async (id: number) => {

    const res = await movieAPI.get<IMovieCredits>(`/${ id  }/credits`)
    const credits = res.data;
    return credits;
}

export const useMovieDetails = (id: number) => {

    const [state, setState] = useState<typeState>({ loading: true, cast: []});

    useEffect(() => {

        getMovieCredits(id)
        .then(({ cast }) => 
            setState({ loading: false, cast }));
    
    }, []);


    return {
        ...state
    }
}

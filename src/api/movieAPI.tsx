import axios from 'axios';

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '93bedd11c1cece11c42091c7a12b832b',
        language: 'es-ES'
    }
});

export default movieAPI;
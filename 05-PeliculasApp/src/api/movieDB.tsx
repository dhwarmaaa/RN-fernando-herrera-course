import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6687df701d0955236a4fc990d7a8786c',
    language: 'es-ES',
  },
});

export default movieDB;

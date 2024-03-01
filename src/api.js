import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async controller => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTg1OTZiOTQzZTJmMzZhZTYyNmNiZWYwOTFmZDA2NyIsInN1YiI6IjY1ZDM5OTcyZjQ5NWVlMDE3YzQwOWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pC8Qs_n6CZ63mJxaFOLVRhQcXOeP_6cFZkiJ7_EcIto',
    },
  };
  const response = await axios.get('trending/movie/day', options);
  return response.data;
};

export const getMovieById = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTg1OTZiOTQzZTJmMzZhZTYyNmNiZWYwOTFmZDA2NyIsInN1YiI6IjY1ZDM5OTcyZjQ5NWVlMDE3YzQwOWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pC8Qs_n6CZ63mJxaFOLVRhQcXOeP_6cFZkiJ7_EcIto',
    },
  };
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};

export const getMovieCast = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTg1OTZiOTQzZTJmMzZhZTYyNmNiZWYwOTFmZDA2NyIsInN1YiI6IjY1ZDM5OTcyZjQ5NWVlMDE3YzQwOWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pC8Qs_n6CZ63mJxaFOLVRhQcXOeP_6cFZkiJ7_EcIto',
    },
  };
  const response = await axios.get(`movie/${id}/credits`, options);
  return response.data;
};

export const getMovieReview = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTg1OTZiOTQzZTJmMzZhZTYyNmNiZWYwOTFmZDA2NyIsInN1YiI6IjY1ZDM5OTcyZjQ5NWVlMDE3YzQwOWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pC8Qs_n6CZ63mJxaFOLVRhQcXOeP_6cFZkiJ7_EcIto',
    },
  };
  const response = await axios.get(`movie/${id}/reviews`, options);
  return response.data;
};

export const getMovieByQuery = async (controller, query) => {
  const options = {
    signal: controller.signal,
    params: {
      query,
    },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTg1OTZiOTQzZTJmMzZhZTYyNmNiZWYwOTFmZDA2NyIsInN1YiI6IjY1ZDM5OTcyZjQ5NWVlMDE3YzQwOWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pC8Qs_n6CZ63mJxaFOLVRhQcXOeP_6cFZkiJ7_EcIto',
    },
  };
  const response = await axios.get(`search/movie`, options);
  return response.data;
};
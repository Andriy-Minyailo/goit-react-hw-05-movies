import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const { data } = await requestServer.movieDetails(movieId);
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const { original_title, poster_path, genres, vote_average, overview } =
    movieDetails;
  return (
    <>
      <h2>{original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <p>{genres}</p>
      <p>{vote_average}</p>
      <p>{overview}</p>
    </>
  );
};

import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const { data } = await requestServer.movieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const { original_title, poster_path, genres, vote_average, overview } =
    movieDetails;

  return (
    movieDetails && (
      <>
        <div>
          <NavLink to={backLinkHref}>Go Back</NavLink>
          <h2>{original_title}</h2>
          <p>{Math.round(vote_average * 10)}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.reduce((acc, obj) => acc + `${obj.name} `, '')}</p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <nav>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </nav>
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

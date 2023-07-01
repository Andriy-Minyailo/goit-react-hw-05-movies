import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

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
          <NavLink to={backLinkHref.current}>Go Back</NavLink>
          <h2>{original_title}</h2>
          <p>{Math.round(vote_average * 10)}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.reduce((acc, obj) => acc + `${obj.name} `, '')}</p>
        </div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_640.jpg`
          }
          alt={original_title}
        />
        <p>Additional information</p>
        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetails;

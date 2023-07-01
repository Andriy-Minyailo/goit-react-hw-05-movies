import { NavLink, useLocation } from 'react-router-dom';

export const ListMovies = ({ arrayMovies }) => {
  const location = useLocation();
  return (
    <nav>
      {arrayMovies.map(({ id, original_title }) => {
        return (
          <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </NavLink>
        );
      })}
    </nav>
  );
};

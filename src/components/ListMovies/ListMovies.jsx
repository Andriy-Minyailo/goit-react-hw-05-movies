import { NavLink } from 'react-router-dom';

export const ListMovies = ({ arrayMovies }) => {
  return (
    <nav>
      {arrayMovies.map(({ id, original_title }) => {
        return (
          <NavLink key={id} to={`/movies/${id}`}>
            {original_title}
          </NavLink>
        );
      })}
    </nav>
  );
};

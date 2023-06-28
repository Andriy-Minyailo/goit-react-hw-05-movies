// import { TrendingToday } from './TrendingToday';
// import { RequestServer } from 'requestServer';

// const requestServer = new RequestServer();

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Routes, Route,  Link } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      {/* <TrendingToday /> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="/movie:movieId">Products</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movie:movieId" element={<MovieDetails />} /> */}
      </Routes>
    </div>
  );
};

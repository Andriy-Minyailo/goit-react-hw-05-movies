import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
// import { Home } from 'pages/Home';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

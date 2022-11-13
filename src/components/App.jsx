import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { SharedLayout } from './SharedLayout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

// const Home = lazy(() => import('../pages/Home'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Movies = lazy(() => import('../pages/Movies'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));
// const SharedLayout = lazy(() => import('./SharedLayout'));
// const NotFound = lazy(() => import('./NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

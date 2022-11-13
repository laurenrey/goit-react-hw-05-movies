import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  //   useNavigate,
} from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieDetails } from 'services/api';

import { MovieInfo } from '../components/MovieInfo';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  //   const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  //   const onGoBackBtn = () => {
  //     navigate(location.state?.from ?? '/');
  //   };

  return (
    <>
      {movie && (
        <main>
          {/* <button type="button" onClick={onGoBackBtn}>
            Go back
          </button> */}
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <MovieInfo info={movie}></MovieInfo>
          <div>
            <p> Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      )}
    </>
  );
};

// state={{ from: location.state?.from }}

import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieDetails } from 'services/api';

import { MovieInfo } from '../components/MovieInfo';
import {
  LinkBtn,
  Container,
  AddInfo,
  AddInfoTitle,
  AddInfoItem,
  AddInfoWrapper,
  AddInfoItemLink,
} from '../pages/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {movie && (
        <Container>
          <LinkBtn to={location.state?.from ?? '/'}>Go back</LinkBtn>
          <MovieInfo info={movie}></MovieInfo>
          <AddInfo>
            <AddInfoTitle> Additional information</AddInfoTitle>
            <AddInfoWrapper>
              <ul>
                <AddInfoItem>
                  <AddInfoItemLink
                    to="cast"
                    state={{ from: location.state?.from }}
                  >
                    Cast
                  </AddInfoItemLink>
                </AddInfoItem>
                <AddInfoItem>
                  <AddInfoItemLink
                    to="reviews"
                    state={{ from: location.state?.from }}
                  >
                    Reviews
                  </AddInfoItemLink>
                </AddInfoItem>
              </ul>
            </AddInfoWrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </AddInfo>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;

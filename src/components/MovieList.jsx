import { useLocation } from 'react-router-dom';
import { MovieListContainer, MovieTitle, LinkTitle } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListContainer>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <LinkTitle to={`movies/${id}`} state={{ from: location }}>
            <MovieTitle>{original_title}</MovieTitle>
          </LinkTitle>
        </li>
      ))}
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};

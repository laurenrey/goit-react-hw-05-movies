import PropTypes from 'prop-types';

export const MovieInfo = ({ info }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const defaultURL = 'https://www.freeiconspng.com/img/23505';

  return (
    <div>
      <img
        src={poster_path ? `${baseURL}${poster_path}` : defaultURL}
        alt={original_title}
      />
      <h1>
        {original_title} ({release_date})
      </h1>
      <p>User Score : {vote_average}</p>
      <p>Overview </p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
    </div>
  );
};

MovieInfo.propTypes = {
  original_title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};

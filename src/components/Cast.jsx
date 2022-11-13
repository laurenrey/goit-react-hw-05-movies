import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../services/api';
// import PropTypes from 'prop-types';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w200';
  const defaultURL = 'https://www.freeiconspng.com/img/23505';

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [movieId]);

  if (cast.length === 0) {
    return 'There is no cast information for this film yet';
  }
  return (
    <>
      <ul>
        {cast.map(({ profile_path, name, character, id }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? `${baseURL}${profile_path}` : defaultURL}
                alt=""
                width="200"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// Cast.propTypes = {
//   //   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   character: PropTypes.string.isRequired,
//   profile_path: PropTypes.string,
// };

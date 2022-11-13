import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovie } from '../services/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const movieSearch = searchParams.get('query');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;

    async function renderMovie() {
      try {
        const moviesResult = await searchMovie(movieSearch);
        setMovies(moviesResult);
      } catch (error) {
        console.log(error);
      }
    }
    renderMovie();
  }, [movieSearch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {movies !==
        0(
          <ul>
            {movies.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

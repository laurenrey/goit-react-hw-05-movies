import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListContainer = styled.ul`
  list-style: none;
`;

export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const MovieTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

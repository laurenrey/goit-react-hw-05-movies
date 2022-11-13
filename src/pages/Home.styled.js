import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: aqua;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 500;
`;

export const MoviesList = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  padding-bottom: 8px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;

  text-decoration: none;
  color: black;
  font-weight: 500;

  /* &.active {
    color: white;
    background-color: orangered;
  } */
`;

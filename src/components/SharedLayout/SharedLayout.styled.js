import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  width: auto;
`;

export const Header = styled.header`
  padding: 16px 32px;
  border-bottom: 1px solid black;
  background-color: #faebd7;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;

  &.active {
    color: white;
    background-color: #c27ba0;
  }
`;

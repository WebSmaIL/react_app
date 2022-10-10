import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.div`
  grid-area: Nav;
  max-height: 50px;
  background: #a93333;
  border-radius: 0 0 30px 30px;
  display: grid;
  width: 100%;
  padding: 0 10px;
  grid-template-columns: repeat(${props => props.itemCount}, 150px);
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  font-family: Arial;
  text-align: center;
  font-size: 18px;
  text-decoration: none;
  color: #feb7b7;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background: #ffffff;
    color: #000;
  }

  &.active {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      background: none;
    }
  }
`;
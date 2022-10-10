import React from 'react';
import { StyledNav, StyledNavLink } from './NavStyles';

export default function Nav(props) {
  return (
    <StyledNav {...props}>
      <StyledNavLink to="/Task1">Задание 1</StyledNavLink>
      <StyledNavLink to="/Task2">Задание 2</StyledNavLink>
    </StyledNav>
  );
}

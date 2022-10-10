import React from 'react'
import styled, {css, keyframes} from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StyledBtn = styled.button.attrs(props => ({
  
}))`
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    border: none;
    align-self: ${({align}) => align || "stretch"};

    &:focus {
      outline: none;
    };

    &:hover {
      animation: ${rotateAnimation} .3s ease-in-out forwards alternate;
    }

    ${props => props.primary && css`
      color: ${props => props.color || 'white'};
      background: ${props => props.background || 'white'};
    `};
    ${props => props.outline && css`
      color: ${props => props.color || 'white'};
      border: 1px solid ${props => props.color || "white"};
      background: transparent;
    `};
`;


const LargeBtn = styled(StyledBtn)`
  font-size: 32px;
`

export default function Button(props) {
  return (
    <StyledBtn {...props}/>
  );
}

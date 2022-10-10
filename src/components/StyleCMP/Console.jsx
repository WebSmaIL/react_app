import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';
import {useState} from 'react';

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: #000;
  font-size: 24px;
  border: none;
  color: ${({ color }) => color || 'white'};
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = useState(['C/users/websmail>']);

  return (
    <Flex>
      <Flex direction={'column'} margin={"0 10px 0 10px"}>
        {lines.map((line) => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole color={color} {...props} />
    </Flex>
  );
};

export default Console;

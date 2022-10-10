import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import Title from './components/StyleCMP/Title';
// import Flex from './components/StyleCMP/Flex';
// import Console from './components/StyleCMP/Console';
// import Button from './components/StyleCMP/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task1 from './components/Task1/Task1';
import Nav from './components/Nav/Nav';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #cfcfcf;
  display: grid;
  grid-template-areas:
    'Nav  Nav  Nav'
    'Main Main Main'
    'Main Main Main'
    'Main Main Main'
    'Main Main Main';
    gap: 20px;
`;

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

// APP COMPONENT
function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <AppWrapper>
        <Nav itemCount={2}/>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;

/* <Flex justify={'center'}>
          <Title color={'green'}>Console from WebSmaIL</Title>
        </Flex>

        <Flex direction={'column'} margin={"10px 0 0 0"}>
          <Console color={'green'}></Console>
          <Button outline={true} color={'green'} align="end">
            Отправить
          </Button>
        </Flex> */

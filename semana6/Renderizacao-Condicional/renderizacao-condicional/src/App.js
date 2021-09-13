import React from 'react';
import Etapa1 from './compoments/Etapa1';
import styled from 'styled-components';

const Aliamento  = styled.div `
   text-align: center;
`


function App() {
  return (
    <Aliamento>
      <Etapa1/>
    </Aliamento>
  );
}

export default App;

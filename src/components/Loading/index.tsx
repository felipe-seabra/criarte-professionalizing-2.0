import React from 'react';

import { Container } from './styles';

function Loading() {
  return (
    <footer>
      <Container>
        <h3>Enviando...</h3>
        <div className="container dots-flow" />
      </Container>
    </footer>
  );
}

export default Loading;

import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Thanks() {
  useEffect(() => {
    setPageTitle('Sobre - Colégio Criarte');
  }, []);

  return (
    <Container>
      <div>Thanks</div>
    </Container>
  );
}

export default Thanks;

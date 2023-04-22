import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Politic() {
  useEffect(() => {
    setPageTitle('Política de Privacidade - Colégio Criarte');
  }, []);

  return (
    <Container>
      <h1>Privacy Policy</h1>
    </Container>
  );
}

export default Politic;

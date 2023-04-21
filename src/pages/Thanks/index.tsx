import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import AlertContactSucess from '../../components/AlertContactSucess';

function Thanks() {
  useEffect(() => {
    setPageTitle('Obrigado - Colégio Criarte');
  }, []);

  return (
    <Container>
      <AlertContactSucess />
    </Container>
  );
}

export default Thanks;

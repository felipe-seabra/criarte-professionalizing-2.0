import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import AlertContactError from '../../components/AlertContactError';

function Sorry() {
  useEffect(() => {
    setPageTitle('Obrigado - Colégio Criarte');
  }, []);

  return (
    <Container>
      <AlertContactError />
    </Container>
  );
}

export default Sorry;

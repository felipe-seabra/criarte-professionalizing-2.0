import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';
import windowScrollToTop from '../../utils/windowScrollToTop';

import { Container } from './styles';
import AlertContactSucess from '../../components/AlertContactSucess';

function Thanks() {
  useEffect(() => {
    setPageTitle('Obrigado - Colégio Criarte');
    windowScrollToTop();
  }, []);

  return (
    <Container>
      <AlertContactSucess />
    </Container>
  );
}

export default Thanks;

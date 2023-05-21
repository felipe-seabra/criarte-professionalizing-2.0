import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';
import windowScrollToTop from '../../utils/windowScrollToTop';

import { Container } from './styles';
import AlertContactError from '../../components/AlertContactError';

function Sorry() {
  useEffect(() => {
    setPageTitle('Obrigado - Colégio Criarte');
    windowScrollToTop();
  }, []);

  return (
    <Container>
      <AlertContactError />
    </Container>
  );
}

export default Sorry;

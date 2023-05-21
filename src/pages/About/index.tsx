import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';
import windowScrollToTop from '../../utils/windowScrollToTop';

import { Container } from './styles';

function About() {
  useEffect(() => {
    setPageTitle('Sobre - Colégio Criarte');
    windowScrollToTop();
  }, []);

  return (
    <Container>
      <div>Sobre</div>
    </Container>
  );
}

export default About;

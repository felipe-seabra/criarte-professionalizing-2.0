import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function About() {
  useEffect(() => {
    setPageTitle('Sobre - Colégio Criarte');
  }, []);

  return (
    <Container>
      <div>Sobre</div>
    </Container>
  );
}

export default About;

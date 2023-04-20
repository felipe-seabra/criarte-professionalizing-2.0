import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Contact() {
  useEffect(() => {
    setPageTitle('Contato - Colégio Criarte');
  }, []);

  return (
    <Container>
      <div>Contato</div>
    </Container>
  );
}

export default Contact;

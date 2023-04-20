import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Courses() {
  useEffect(() => {
    setPageTitle('Cursos - Colégio Criarte');
  }, []);

  return (
    <Container>
      <div>Cursos</div>
    </Container>
  );
}

export default Courses;

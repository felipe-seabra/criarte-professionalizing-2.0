/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';

function Error() {
  useEffect(() => {
    setPageTitle('Error 404 - Colégio Criarte');
  }, []);

  return (
    <Container>
      <h1>Error 404 - Page Not Found</h1>
    </Container>
  );
}

export default Error;

import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import { AppContext } from '../../context/provider';

function Contact() {
  const { submitForm } = useContext(AppContext);

  useEffect(() => {
    setPageTitle('Contato - Colégio Criarte');
  }, []);

  return (
    <Container>{!submitForm ? <h1>Contato</h1> : <Navigate to="/obrigado" />}</Container>
  );
}

export default Contact;

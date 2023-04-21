import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import { AppContext } from '../../context/provider';
import Form from '../../components/Form';

function Contact() {
  const { submitForm } = useContext(AppContext);

  useEffect(() => {
    setPageTitle('Contato - Colégio Criarte');
  }, []);

  return <Container>{!submitForm ? <Form /> : <Navigate to="/obrigado" />}</Container>;
}

export default Contact;

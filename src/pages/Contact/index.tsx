import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import { AppContext } from '../../context/provider';
import Form from '../../components/Form';

function Contact() {
  const { submitForm, errorSubmitForm } = useContext(AppContext);

  useEffect(() => {
    setPageTitle('Contato - Colégio Criarte');
  }, []);

  let content;
  if (!submitForm) {
    content = <Form />;
  } else if (!errorSubmitForm) {
    content = <Navigate to="/obrigado" />;
  } else {
    content = <Navigate to="/erro" />;
  }

  return <Container>{content}</Container>;
}

export default Contact;

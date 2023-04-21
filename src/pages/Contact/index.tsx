import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import { AppContext } from '../../context/provider';
import Form from '../../components/Form';
import Loading from '../../components/Loading';

function Contact() {
  const { submitForm, errorSubmitForm, isLoading } = useContext(AppContext);

  useEffect(() => {
    setPageTitle('Contato - Colégio Criarte');
  }, []);

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (!submitForm) {
    content = <Form />;
  } else if (!errorSubmitForm) {
    content = <Navigate to="/obrigado" />;
  } else {
    content = <Navigate to="/erro" />;
  }

  return <Container>{content}</Container>;
}

export default Contact;
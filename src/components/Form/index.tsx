/* eslint-disable no-console */
import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Form as BootstrapForm, Button, FloatingLabel } from 'react-bootstrap';
import { Container } from './styles';
import { AppContext } from '../../context/provider';

import verifyBtn from '../../utils/verifyBtn';
import phoneMask from '../../utils/phoneMask';
import { IFormValues } from '../../interfaces';

function Form() {
  const { setSubmitForm } = useContext(AppContext);

  const options = [
    'Selecione um Curso',
    'Técnico em Farmácia',
    'Técnico em Radiologia',
    'Técnico em Enfermagem'
  ];

  const [formValues, setFormValues] = useState<IFormValues>({
    option: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    checkbox: false
  });

  const handleChangeOptions = (event: ChangeEvent<HTMLSelectElement>): void => {
    console.log(verifyBtn(formValues));
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (): void => {
    setSubmitForm(true);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        'umbler',
        'template_38jtolp',
        e.target as HTMLFormElement,
        'tMPnhxJANoBz5pvuo'
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      })
      .catch((error: EmailJSResponseStatus) => {
        console.log(error.text);
      });
    handleFormSubmit();
  };

  return (
    <Container>
      <div className="pt-5 mt-5 mb-5">
        <h2 className="text-center mb-4 pt-5">Formulário</h2>
        <BootstrapForm className="container-fluid" onSubmit={sendEmail}>
          <>
            {/* input courses options */}
            <FloatingLabel
              controlId="floatingInput"
              label="Selecione um curso*"
              className="mb-3">
              <BootstrapForm.Select
                value={formValues.option}
                name="option"
                onChange={handleChangeOptions}
                required>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </BootstrapForm.Select>
            </FloatingLabel>
            {/* input all name */}
            <FloatingLabel
              controlId="floatingInput"
              label="Nome completo*"
              className="mb-3">
              <BootstrapForm.Control
                type="text"
                placeholder="Nome completo"
                value={formValues.name}
                name="name"
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="E-mail*" className="mb-3">
              <BootstrapForm.Control
                type="email"
                placeholder="name@example.com"
                value={formValues.email}
                name="email"
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                required
              />
            </FloatingLabel>
            {/* input phone */}
            <FloatingLabel controlId="floatingInput" label="Celular*" className="mb-3">
              <BootstrapForm.Control
                type="tel"
                placeholder="(xx)xxxxx-xxxx"
                value={formValues.phone}
                name="phone"
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: phoneMask(e.target.value) })
                }
                required
              />
            </FloatingLabel>
            {/* input message */}
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Deixe sua mensagem aqui*"
              className="mb-3">
              <BootstrapForm.Control
                as="textarea"
                placeholder="Deixe sua mensagem aqui"
                style={{ height: '100px' }}
                value={formValues.message}
                name="message"
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                required
              />
            </FloatingLabel>
          </>
          {/* input checkbox */}
          <BootstrapForm.Check
            label="Aceito enviar meus dados."
            className="mb-3"
            type="checkbox"
            checked={formValues.checkbox}
            name="checkbox"
            onClick={() =>
              setFormValues({ ...formValues, checkbox: !formValues.checkbox })
            }
          />
          {/* submit button */}
          <Button
            variant="primary"
            type="submit"
            className="global-btn"
            value="Send"
            disabled={verifyBtn(formValues)}>
            Enviar
          </Button>
        </BootstrapForm>
      </div>
    </Container>
  );
}

export default Form;

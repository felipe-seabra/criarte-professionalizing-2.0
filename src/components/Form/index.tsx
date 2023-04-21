/* eslint-disable no-console */
import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Form as BootstrapForm, Button, FloatingLabel } from 'react-bootstrap';
import { Container } from './styles';
import { AppContext } from '../../context/provider';

import RequiredField from '../../helpers/RequiredField';

import verifyBtn, {
  verifyFieldCheckbox,
  verifyFieldEmail,
  verifyFieldMessage,
  verifyFieldName,
  verifyFieldOption,
  verifyFieldPhone
} from '../../utils/verifyBtn';
import phoneMask from '../../utils/phoneMask';
import { IFormValues } from '../../interfaces';

function Form() {
  const { setSubmitForm, setErrorSubmitForm, setIsLoading } = useContext(AppContext);

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
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (): void => {
    setSubmitForm(true);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        'umbler',
        'template_38jtolp',
        e.target as HTMLFormElement,
        'tMPnhxJANoBz5pvuo'
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        handleFormSubmit();
        setIsLoading(false);
      })
      .catch((error: EmailJSResponseStatus) => {
        console.log(error.text);
        setErrorSubmitForm(true);
        setIsLoading(false);
      });
  };

  const handleFormSubmitIsLoading = (e: FormEvent<HTMLFormElement>): void => {
    setIsLoading(true);
    sendEmail(e);
  };

  return (
    <Container>
      <div className="pt-5 mt-5 mb-5">
        <h2 className="text-center mb-4 pt-5">Formulário</h2>
        <BootstrapForm className="container-fluid" onSubmit={handleFormSubmitIsLoading}>
          <>
            {/* input courses options */}
            <RequiredField isValid={verifyFieldOption(formValues.option)} />
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
            <RequiredField isValid={verifyFieldName(formValues.name)} />
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
            <RequiredField isValid={verifyFieldEmail(formValues.email)} />
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
            <RequiredField isValid={verifyFieldPhone(formValues.phone)} />
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
            <RequiredField isValid={verifyFieldMessage(formValues.message)} />
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
          <RequiredField isValid={verifyFieldCheckbox(formValues.checkbox)} />
          <BootstrapForm.Check
            label="Aceito enviar meus dados."
            className="mb-3"
            type="checkbox"
            readOnly={formValues.checkbox}
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

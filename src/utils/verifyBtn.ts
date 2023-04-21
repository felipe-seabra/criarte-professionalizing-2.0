import { IFormValues } from '../interfaces';

const verifyBtn = (formValues: IFormValues) => {
  const { option, name, email, phone, message, checkbox } = formValues;
  const num = 3;
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;
  return !(
    option !== '' &&
    option !== 'Selecione um Curso' &&
    name.length >= num &&
    emailRegex.test(email) &&
    phoneRegex.test(phone) &&
    message.length > num &&
    checkbox === true
  );
};

export default verifyBtn;

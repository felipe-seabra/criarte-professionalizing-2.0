import { IFormValues } from '../interfaces';

const num = 3;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;

const verifyBtn = (formValues: IFormValues) => {
  const { option, name, email, phone, message, checkbox } = formValues;
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

export const verifyFieldOption = (option: string) =>
  option !== '' && option !== 'Selecione um Curso';

export const verifyFieldName = (name: string) => name.length >= num;

export const verifyFieldEmail = (email: string) => emailRegex.test(email);

export const verifyFieldPhone = (phone: string) => phoneRegex.test(phone);

export const verifyFieldMessage = (message: string) => message.length > num;

export const verifyFieldCheckbox = (checkbox: boolean) => checkbox === true;

export default verifyBtn;

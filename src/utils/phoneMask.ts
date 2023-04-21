const phoneMask = (value: string | undefined): string => {
  if (!value) return '';

  let newValue = value.replace(/\D/g, '');
  newValue = newValue.replace(/(\d{2})(\d)/, '($1) $2');
  newValue = newValue.replace(/(\d)(\d{4})$/, '$1-$2');

  return newValue;
};

export default phoneMask;

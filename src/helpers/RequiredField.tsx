import React from 'react';

interface Props {
  isValid: boolean;
}

export default function RequiredField(props: Props) {
  const { isValid } = props;
  return !isValid ? <p className="required-field">Campo obrigatório!</p> : null;
}

import React from 'react';

import { Container } from './styles';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const verifyBtn = () => {
    const MIN_LENGTH = 6;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    return !(password.length >= MIN_LENGTH && emailRegex.test(email));
  };

  return (
    <Container>
      <h1>Login</h1>
      <div>
        <section className="login-inputs">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </section>
        <div className="link">
          <button type="button" disabled={verifyBtn()}>
            Entrar
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Login;

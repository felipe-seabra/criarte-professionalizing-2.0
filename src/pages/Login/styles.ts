import styled from 'styled-components';
import { rgba, shade } from 'polished';

export const Container = styled.div`
  background: ${(props) => shade(0.1, rgba(props.theme.colors.primary, 0.5))};
  align-items: center;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0 4px 5px 0,
    rgb(0 0 0 / 12%) 0 1px 10px 0;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  width: 450px;

  h1 {
    color: ${(props) => props.theme.colors.title};
  }

  .login-inputs {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  .login-inputs input {
    border: 1px solid ${(props) => props.theme.colors.secundary};
    border-radius: 5px;
    height: 40px;
    margin: 5px;
    padding: 0 0 0 15px;
  }

  .link button {
    align-self: center;
    background-color: ${(props) => shade(0.15, props.theme.colors.secundary)};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    height: 40px;
    margin-top: 15px;
    padding: 5px;
    width: 400px;
  }

  .link button:hover {
    background-color: ${(props) => shade(0.15, rgba(props.theme.colors.secundary, 0.8))};
  }

  .link button:disabled {
    cursor: not-allowed;
    opacity: 40%;
  }
`;

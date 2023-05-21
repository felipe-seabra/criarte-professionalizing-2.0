import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Poppins', sans-serif;;
  }

  main {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: ${(props) => props.theme.colors.secundary};
  }

  .global-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secundary};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }

  .global-btn:hover {
    color: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .global-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transition: 0.5s;
  }

  .global-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }
  
  .global-btn:disable {
    cursor: not-allowed;
  }

  .required-field {
    color: #E5625E;
    font-size: 0.7em;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  /* Estilizando o rastro da barra de rolagem */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  /* Estilizando o "polegar" da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
  }

  /* Estilizando os botões de seta da barra de rolagem */
  ::-webkit-scrollbar-button {
    background: rgba(204, 204, 204, 0.5); 
  }

  /* Estilizando o canto inferior direito da barra de rolagem */
  ::-webkit-scrollbar-corner {
    background: rgba(241, 241, 241, 0.5);
  }

`;

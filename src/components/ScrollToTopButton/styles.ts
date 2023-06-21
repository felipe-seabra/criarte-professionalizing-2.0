import styled from 'styled-components';

export const Container = styled.div`
  @keyframes shadow-blink {
    0% {
      box-shadow: inset 0 0 0 -5px ${(props) => props.theme.colors.secundary};
    }
    50% {
      box-shadow: inset 0 0 10px ${(props) => props.theme.colors.secundary};
    }
    100% {
      box-shadow: inset 0 0 0 -5px ${(props) => props.theme.colors.secundary};
    }
  }

  .scroll-to-top-button {
    animation: shadow-blink 10s ease-in-out infinite;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 80px;
    right: 15px;
    z-index: 99;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    font-size: 18px;
    opacity: 0;
    transition: 0.5s;
    overflow: hidden;
  }

  .scroll-to-top-button:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  .scroll-to-top-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.secundary};
    z-index: -1;
    transition: 0.5s;
  }

  .scroll-to-top-button:hover::before {
    width: 100%;
    transition: 0.5s;
  }

  .scroll-to-top-button.visible {
    opacity: 1;
  }
`;

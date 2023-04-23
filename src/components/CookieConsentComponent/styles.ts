import styled from 'styled-components';

export const Container = styled.div`
  .cookie-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.primary} !important;
    border-radius: 8px !important;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primary} !important;
    background: ${(props) => props.theme.colors.secundary} !important;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }

  .cookie-btn:hover {
    color: ${(props) => props.theme.colors.secundary} !important;
    border: 2px solid ${(props) => props.theme.colors.secundary} !important;
  }

  .cookie-btn::before {
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

  .cookie-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }
`;

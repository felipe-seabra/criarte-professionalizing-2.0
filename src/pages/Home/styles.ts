import styled from 'styled-components';

import { bgEnfermagem } from '../../images';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bgEnfermagem}) no-repeat center/cover;
  display: flex;
  align-items: center;
  padding: 0 10%;
  
  color: ${(props) => props.theme.colors.text};
  
  .home {
    display: flex;
    height: 100vh;
    align-items: center;
    padding: 0 10%;
  }

  .home-content {
    max-width: 600px;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secundary};
  }

  p {
    font-size: 1.2rem;
    margin: 1.5rem 0;
  }

  .home-btn {
    display: flex;
    justify-content: space-between;
    width: 345px;
    height: 50px;
  }

  .home-btn a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    background: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }

  .home-btn a:hover {
    color: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .home-btn a:nth-child(2) {
    background: transparent;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.secundary};
  }

  .home-btn a:nth-child(2):hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  .home-btn a:nth-child(2)::before {
    background: ${(props) => props.theme.colors.secundary};
  }

  .home-btn a::before {
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

  .home-btn a:hover::before {
    width: 100%;
    transition: 0.5s;
  }
`;

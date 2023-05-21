import styled from 'styled-components';

export const Container = styled.div`
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  z-index: 999;

  footer {
    min-height: 7.5vh;
  }

  div {
    color: ${(props) => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 999;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-top: 1px solid ${(props) => props.theme.colors.secundary};
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
  }

  h4 {
    color: ${(props) => props.theme.colors.secundary};
  }

  i {
    color: ${(props) => props.theme.colors.secundary};
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const MapIcon = styled.i`
  font-size: 18px;
  margin-right: 5px;
`;

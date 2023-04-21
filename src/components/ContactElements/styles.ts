import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
  margin-bottom: 30px;
  // background-color: ${(props) => props.theme.colors.secundary};

  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.text};
    border-radius: 50%;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  a::before {
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

  a:hover::before {
    width: 100%;
    transition: 0.5s;
  }
`;

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

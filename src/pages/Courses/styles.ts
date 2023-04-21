import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 10%;

  color: ${(props) => props.theme.colors.text};
`;

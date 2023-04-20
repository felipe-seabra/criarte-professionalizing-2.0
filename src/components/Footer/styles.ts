import styled from 'styled-components';

export const Container = styled.div`
  height: 7.5vh;
  color: ${(props) => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

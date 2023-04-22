import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;
  padding: 0 5%;
  max-width: 90%;

  color: ${(props) => props.theme.colors.text};
`;

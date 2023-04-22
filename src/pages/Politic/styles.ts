import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  max-width: 92%;

  color: ${(props) => props.theme.colors.text};

  h1 {
    text-align: center;
  }

  p {
    font-size: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-sizing: border-box;
    padding: 0.5rem;
  }
`;

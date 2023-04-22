import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap: wrap;
  // padding: 0 5%;
  margin-top: 10rem;

  color: ${(props) => props.theme.colors.text};

  .card-box {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    flex-wrap: wrap;
  }

  .courses {
    border-radius: 20px;
    margin: 10px;
  }
`;

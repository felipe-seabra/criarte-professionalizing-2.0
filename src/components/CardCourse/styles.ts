import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.04);
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 20px;
  margin: 1rem 0;
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: 0.5s;
  padding: 1rem;
  max-width: 400px;
  min-height: 600px;
  display: flex;
  text-align: center;

  :hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  .course-img {
    max-width: 200px;
    border-radius: 10px;
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary}, 0 0.2em;
  }

  .container {
    display: flex;
    width: 300px;
    margin: auto;
    align-items: center;
    flex-direction: column;
  }

  .list {
    font-size: 1.2em;
    text-align: start;
  }

  ul {
    flex-direction: column;
  }

  li {
    list-style: square;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 22px;
    color: ${(props) => props.theme.colors.secundary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }
`;

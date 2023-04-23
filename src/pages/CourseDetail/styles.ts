import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  font-size: 1.3em;

  color: ${(props) => props.theme.colors.text};

  h1 {
    color: ${(props) => props.theme.colors.secundary};
    text-shadow: 1px 1px 1px ${(props) => props.theme.colors.text};
    text-decoration: underline;
  }

  .img-course {
    width: 300px;
    border-radius: 10px;
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary}, 0 0.2em;
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

  .interested-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100%;
    padding: 0.5rem 0.5rem;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secundary};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }

  .interested-btn:hover {
    color: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .interested-btn::before {
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

  .interested-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }
  .interested-btn:disable {
    cursor: not-allowed;
  }
`;

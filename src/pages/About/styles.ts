import styled from 'styled-components';

import { bgHome } from '../../images';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bgHome}) no-repeat center/cover;
  display: flex;
  align-items: center;
  padding: 0 10%;

  color: ${(props) => props.theme.colors.text};
`;

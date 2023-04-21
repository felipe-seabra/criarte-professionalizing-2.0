import styled from 'styled-components';

export const Container = styled.div`
  .dots-flow:before {
    -webkit-animation: dots-flow 0.85s infinite ease;
    animation: dots-flow 0.85s infinite ease;
    border-radius: 100%;
    content: '';
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -40px);
    transform: translate(-50%, -40px);
    width: 16px;
  }

  @-webkit-keyframes dots-flow {
    0%,
    100% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white, 26px 32px 0 0 white;
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white, 26px 32px 0 0 white;
    }
    35% {
      -webkit-box-shadow: -26px 32px 0 4px ${(props) => props.theme.colors.secundary},
        0px 32px 0 0 white, 26px 32px 0 0 white;
      box-shadow: -26px 32px 0 4px ${(props) => props.theme.colors.secundary},
        0px 32px 0 0 white, 26px 32px 0 0 white;
    }
    50% {
      -webkit-box-shadow: -26px 32px 0 0 white,
        0px 32px 0 4px ${(props) => props.theme.colors.secundary}, 26px 32px 0 0 white;
      box-shadow: -26px 32px 0 0 white,
        0px 32px 0 4px ${(props) => props.theme.colors.secundary}, 26px 32px 0 0 white;
    }
    65% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px ${(props) => props.theme.colors.secundary};
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px ${(props) => props.theme.colors.secundary};
    }
  }

  @keyframes dots-flow {
    0%,
    100% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white, 26px 32px 0 0 white;
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white, 26px 32px 0 0 white;
    }
    35% {
      -webkit-box-shadow: -26px 32px 0 4px ${(props) => props.theme.colors.secundary},
        0px 32px 0 0 white, 26px 32px 0 0 white;
      box-shadow: -26px 32px 0 4px ${(props) => props.theme.colors.secundary},
        0px 32px 0 0 white, 26px 32px 0 0 white;
    }
    50% {
      -webkit-box-shadow: -26px 32px 0 0 white,
        0px 32px 0 4px ${(props) => props.theme.colors.secundary}, 26px 32px 0 0 white;
      box-shadow: -26px 32px 0 0 white,
        0px 32px 0 4px ${(props) => props.theme.colors.secundary}, 26px 32px 0 0 white;
    }
    65% {
      -webkit-box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px ${(props) => props.theme.colors.secundary};
      box-shadow: -26px 32px 0px 0 white, 0px 32px 0 0 white,
        26px 32px 0 4px ${(props) => props.theme.colors.secundary};
    }
  }
`;

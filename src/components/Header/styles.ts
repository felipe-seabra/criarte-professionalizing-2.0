import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background: ${(props) => props.theme.colors.primary}};
  padding: 0 30px;

  .header__logo {
    font-size: 1.5em;
    cursor: pointer;
    letter-spacing: 1px;
    text-decoration: none;
    color: #fff;
  }

  .header__links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2em;
    font-size: 1.2em;
  }

  .navlink {
    color: #fff;
  }

  .navlink:hover {
    color: ${(props) => props.theme.colors.secundary} !important;
    transform: scale(1.1);
  }

  .navlink:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.secundary};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .navlink:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .navlink.active {
    color: ${(props) => props.theme.colors.secundary} !important;
    transform: scale(1.1);
  }

  .navlink.active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

nav .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
`;

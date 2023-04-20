import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const NAV_LINKS = [
  { path: '/', label: 'Login' }
  // { path: '/about', label: 'Sobre' },
  // { path: '/projects', label: 'Projetos' },
  // { path: '/contact', label: 'Contato' },
];

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const location = useLocation();
  const { colors, title } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header>
      <Container>
        <Navbar collapseOnSelect expand="md">
          <Navbar.Brand>
            <Link to="/" className="header__logo">
              Felipe
              <span> Seabra</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container header__links">
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  className="navlink"
                  active={activeLink === link.path}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
          />
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;

import React, { CSSProperties, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Container,
  FooterColumn,
  FooterContainer,
  FooterLink,
  FooterText,
  MapIcon
} from './styles';

type Position = 'absolute' | 'relative';

const LOCATION = `https://www.google.com.br/maps/place/Col%C3%A9gio+Criarte/@-22.1414597,-51.3914309,17z/data=!3m1!4b1!4m6!3m5!1s0x9493f501fcbdda6f:0xe19d9a18e1e99b9e!8m2!3d-22.1414597!4d-51.3888506!16s%2Fg%2F1tk_qcc7`;

const LINK_SAENET = `http://criarte.saenet.net.br/Sae8Portal/login.aspx?ReturnUrl=%2fSae8Portal%2fprincipal.aspx`;

function Footer() {
  const [position, setPosition] = useState<Position>(
    window.location.pathname === '/' ? 'absolute' : 'relative'
  );

  const ContainerStyle: CSSProperties = { position };
  const location = useLocation();

  React.useEffect(() => {
    setPosition(
      location.pathname === '/' || location.pathname === '/cursos'
        ? 'absolute'
        : 'relative'
    );
  }, [location.pathname]);

  return (
    <footer>
      {location.pathname === '/' ? (
        <Container style={ContainerStyle}>
          <div>Colégio Criarte - &copy; 2022</div>
        </Container>
      ) : (
        <FooterContainer>
          <FooterColumn>
            <h4>Entre em contato</h4>
            <div>
              <FooterLink href="mailto:contato@criarteprofissionalizante.com.br">
                contato@criarteprofissionalizante.com.br
              </FooterLink>
              <FooterLink href="tel:+551832222682">(18) 3222-2682</FooterLink>
            </div>
          </FooterColumn>
          <FooterColumn>
            <h4>Localização:</h4>
            <FooterText>
              <MapIcon>
                <i className="bx bxs-map" />
              </MapIcon>
              Rua Antônio Furtado de Miranda, 40 - Vila Industrial
            </FooterText>
            <FooterText>Presidente Prudente - SP</FooterText>
            <FooterLink href={LOCATION} target="_blank">
              <MapIcon>
                <i className="bx bxs-map" />
              </MapIcon>
              Como Chegar
            </FooterLink>
          </FooterColumn>
          <FooterColumn>
            <h4>Cursos Técnicos</h4>
            <Link to="/cursos/1">
              <FooterLink>Técnico em Enfermagem</FooterLink>
            </Link>
            <Link to="/cursos/2">
              <FooterLink>Técnico em Farmácia</FooterLink>
            </Link>
            <Link to="/cursos/3">
              <FooterLink>Técnico em Radiologia</FooterLink>
            </Link>
          </FooterColumn>
          <FooterColumn>
            <h4>Institucional</h4>
            <Link to="/">
              <FooterLink>Quem Somos</FooterLink>
            </Link>
            <Link to="/contato">
              <FooterLink>Fale Conosco</FooterLink>
            </Link>
            <Link to={LINK_SAENET} target="_blank">
              <FooterLink>Área do Aluno*</FooterLink>
            </Link>
            <Link to="/politica">
              <FooterLink>Política de Privacidade</FooterLink>
            </Link>
          </FooterColumn>
        </FooterContainer>
      )}
    </footer>
  );
}

export default Footer;

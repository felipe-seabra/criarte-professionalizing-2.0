import React, { CSSProperties, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Container,
  Copy,
  FooterColumn,
  FooterContainer,
  FooterLink,
  FooterText,
  MapIcon
} from './styles';
import ChatPopup from '../ChatPopup';

type Position = 'absolute' | 'relative';

const LOCATION = `https://www.google.com.br/maps/place/Col%C3%A9gio+Criarte/@-22.1414597,-51.3914309,17z/data=!3m1!4b1!4m6!3m5!1s0x9493f501fcbdda6f:0xe19d9a18e1e99b9e!8m2!3d-22.1414597!4d-51.3888506!16s%2Fg%2F1tk_qcc7`;

const LINK_SAENET = `http://criarte.saenet.net.br/Sae8Portal/login.aspx?ReturnUrl=%2fSae8Portal%2fprincipal.aspx`;

const LINK_WHATSAPP =
  'https://api.whatsapp.com/send?phone=5518981029767&text=Ol%C3%A1,%20tenho%20interesse%20no%20curso%20profissionalizante%20do%20Criarte.';

function Footer() {
  const [position, setPosition] = useState<Position>(
    window.location.pathname === '/' ? 'absolute' : 'relative'
  );

  const ContainerStyle: CSSProperties = { position };
  const location = useLocation();

  useEffect(() => {
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
          <Copy>Colégio Criarte - &copy; 2022</Copy>
        </Container>
      ) : (
        <>
          <FooterContainer>
            <FooterColumn>
              <h4>Contato:</h4>
              <Link to="tel:+551832222682">
                <FooterLink>
                  <i className="bx bxs-phone" /> (18) 3222-2682
                </FooterLink>
              </Link>
              <Link to={LINK_WHATSAPP} target="_blank">
                <FooterLink>
                  <i className="bx bxl-whatsapp" /> WhatsApp
                </FooterLink>
              </Link>
              <Link to="mailto:contato@criarteprofissionalizante.com.br">
                <FooterLink>
                  <i className="bx bxs-envelope" /> Email
                </FooterLink>
              </Link>
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
              <h4>Cursos Técnicos:</h4>
              <FooterLink href="/cursos/1">Técnico em Enfermagem</FooterLink>
              <FooterLink href="/cursos/2">Técnico em Farmácia</FooterLink>
              <FooterLink href="/cursos/3">Técnico em Radiologia</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <h4>Institucional:</h4>
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
          <Copy className="mt-2">Colégio Criarte - &copy; 2022</Copy>
        </>
      )}
      <ChatPopup />
    </footer>
  );
}

export default Footer;

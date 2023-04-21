import React, { CSSProperties, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

type Position = 'absolute' | 'relative';

function Footer() {
  const [position, setPosition] = useState<Position>(
    window.location.pathname === '/' ? 'absolute' : 'relative'
  );

  const ContainerStyle: CSSProperties = { position };
  const location = useLocation();

  React.useEffect(() => {
    setPosition(location.pathname === '/' ? 'absolute' : 'relative');
  }, [location.pathname]);

  return (
    <footer>
      <Container style={ContainerStyle}>
        <div>Colégio Criarte - &copy; 2023</div>
      </Container>
    </footer>
  );
}

export default Footer;

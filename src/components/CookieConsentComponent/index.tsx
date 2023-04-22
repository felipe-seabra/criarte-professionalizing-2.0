import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

const COOKIE_STYLE: React.CSSProperties = {
  background: '#081B29',
  textAlign: 'left',
  fontSize: '16px',
  padding: '20px'
};

function CookieConsentComponent(): JSX.Element {
  return (
    <CookieConsent style={COOKIE_STYLE} buttonText="Aceitar" expires={30}>
      Este site utiliza cookies para seu adequado funcionamento, análises, personalização
      e publicidade. Ao continuar navegando neste site você declara estar ciente destas
      condições. Para saber mais, acesse nossa{' '}
      <Link to="/politica">Política de Privacidade</Link>.
    </CookieConsent>
  );
}

export default CookieConsentComponent;

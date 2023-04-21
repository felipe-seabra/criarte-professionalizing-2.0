import React from 'react';

import { Container } from './styles';

const linkWhatsapp =
  'https://api.whatsapp.com/send?phone=5518981029767&text=Ol%C3%A1,%20tenho%20interesse%20no%20curso%20profissionalizante%20do%20Criarte.';

const linkEmail = 'mailto:contato@criarteprofissionalizante.com.br';

const linkPhone = 'tel:+55(18)3222-2682';

function ContactElements() {
  return (
    <footer>
      <Container>
        <a href={linkWhatsapp} target="blank">
          <i className="bx bxl-whatsapp" />
        </a>
        <a href={linkEmail}>
          <i className="bx bx-envelope" />
        </a>
        <a href={linkPhone}>
          <i className="bx bx-phone" />
        </a>
      </Container>
    </footer>
  );
}

export default ContactElements;

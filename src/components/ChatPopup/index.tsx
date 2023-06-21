import React, { useState } from 'react';

import { logoC } from '../../images';

import {
  ChatContainer,
  CloseButton,
  Icon,
  IconSend,
  IconWhats,
  Input,
  InputContainer,
  LogoContainer,
  LogoImage,
  PopupContainer,
  PopupContent,
  SendButton,
  WhatsAppIcon
} from './styles';

function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=5518981029767&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  const containerStyle = {
    bottom: isOpen ? '80px' : '20px',
    cursor: isOpen ? 'auto' : 'pointer'
  };

  return (
    <ChatContainer style={containerStyle}>
      {!isOpen && (
        <WhatsAppIcon onClick={handleTogglePopup}>
          <IconWhats className="bx bxl-whatsapp" style={{ color: 'white' }} />
          <span style={{ fontSize: '14px', color: 'white' }}>
            Olá, como posso ajudar?
          </span>
        </WhatsAppIcon>
      )}
      {isOpen && (
        <>
          <LogoContainer>
            <LogoImage src={logoC} alt="Logo" />
          </LogoContainer>
          <PopupContainer>
            <PopupContent>
              <p>Nossa equipe está aqui para responder às suas perguntas.</p>
              <p>Pergunte-nos qualquer coisa!</p>
            </PopupContent>
            <InputContainer>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Fale conosco!"
              />
              <SendButton onClick={handleSendMessage}>
                <IconSend className="bx bxs-paper-plane" style={{ color: 'white' }} />
              </SendButton>
            </InputContainer>
            <CloseButton onClick={handleClosePopup}>
              <Icon className="bx bx-x" style={{ color: 'white' }} />
            </CloseButton>
          </PopupContainer>
        </>
      )}
    </ChatContainer>
  );
}

export default ChatPopup;

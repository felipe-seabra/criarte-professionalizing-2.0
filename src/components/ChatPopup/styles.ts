import styled from 'styled-components';

const primaryColor = '#33a587';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 2rem;
  display: flex;
  align-items: center;
  z-index: 998;
  cursor: pointer;
  transition: bottom 0.3s ease-in-out;
`;

export const PopupContainer = styled.div`
  background-color: ${primaryColor};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 248px;
  position: relative;
`;

export const WhatsAppIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  border-radius: 15px;
  padding: 10px 20px;
  margin-right: 10px;

  animation: shadow 5s ease-in-out infinite;

  @keyframes shadow {
    0% {
      box-shadow: 0 0 0 -5px ${(props) => props.theme.colors.title};
    }
    50% {
      box-shadow: 0 0 5px ${(props) => props.theme.colors.title};
    }
    100% {
      box-shadow: 0 0 0 -5px ${(props) => props.theme.colors.title};
    }
  }
`;

export const IconWhats = styled.i`
  margin-right: 10px;
  font-size: 20px;
`;

export const Icon = styled.i`
  margin: 0 auto;
  font-size: 20px;
`;

export const IconSend = styled.i`
  margin: 0 auto;
  color: ${primaryColor} !important;
  font-size: 25px;
`;

export const PopupContent = styled.div`
  color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  background-color: ${primaryColor};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 248px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 0 0 0 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const SendButton = styled.button`
  position: absolute;
  top: 2px;
  right: 0;
  background: none;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: auto;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

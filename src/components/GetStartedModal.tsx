import { SyntheticEvent } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ModalContainer = styled.div`
  background: #3a3054;
  color: white;
  margin: 0 24px;
  padding: 40px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ModalText = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 30px;
  text-align: center;
`;

const ModalTextResources = styled(ModalText)`
  border-bottom: 1px solid #9e9aa8;
  margin-bottom: 32px;
`;

const ModalTextLogin = styled(ModalText)`
  padding-bottom: 24px;
`;

const ModalButton = styled.button`
  background: #2bd0d0;
  border-radius: 28px;
  color: #fff;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  padding-top: 12px;
  padding-bottom: 9px;
`;

type Props = {
  setModalOpen: Function;
};

export default function GetStartedModal({ setModalOpen }: Props) {
  return (
    <Background onClick={() => setModalOpen(false)}>
      <ModalContainer onClick={(e: SyntheticEvent) => e.stopPropagation()}>
        <ModalText>Features</ModalText>
        <ModalText>Pricing</ModalText>
        <ModalTextResources>Resources</ModalTextResources>
        <ModalTextLogin>Login</ModalTextLogin>
        <ModalButton type="button">Sign Up</ModalButton>
      </ModalContainer>
    </Background>
  );
}

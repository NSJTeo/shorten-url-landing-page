import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import styled from 'styled-components';

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
`;

const ModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

type Props = {
  setModalOpen: Function;
};

export default function Header({ setModalOpen }: Props) {
  return (
    <HeaderEl>
      <img src={logo} alt="shortly logo" />
      <ModalButton onClick={() => setModalOpen(true)}>
        <img src={hamburgerIcon} alt="hamburger icon" />
      </ModalButton>
    </HeaderEl>
  );
}

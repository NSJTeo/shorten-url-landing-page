import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import styled from 'styled-components';
import breakpoints from '../config/breakpoints';

const HeaderEl = styled.header`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  @media (min-width: ${breakpoints.desktop}) {
    padding: 48px 165px 78px 167px;
  }
`;

const HeaderLogo = styled.img`
  padding-right: 45px;
  cursor: pointer;
`;

const ModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const HeaderDivision = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.p`
  display: none;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #9e9aa8;
  cursor: pointer;
  &:hover {
    color: black;
  }
  @media (min-width: ${breakpoints.desktop}) {
    display: block;
  }
`;

const HeaderLinkFeatures = styled(HeaderLink)`
  padding-right: 29px;
`;

const HeaderLinkPricing = styled(HeaderLink)`
  padding-right: 32px;
`;

const HeaderLinkLogin = styled(HeaderLink)`
  padding-right: 37px;
`;

const SignUpButton = styled.button`
  display: none;
  background: #2bd0d0;
  border-radius: 28px;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 9px 23px 8px 24px;
  &:active {
    background: #9ae3e3;
  }
  @media (min-width: ${breakpoints.desktop}) {
    display: block;
  }
`;

type Props = {
  setModalOpen: Function;
};

export default function Header({ setModalOpen }: Props) {
  return (
    <HeaderEl>
      <HeaderDivision>
        <HeaderLogo src={logo} alt="shortly logo" />
        <HeaderLinkFeatures>Features</HeaderLinkFeatures>
        <HeaderLinkPricing>Pricing</HeaderLinkPricing>
        <HeaderLink>Resources</HeaderLink>
      </HeaderDivision>
      <HeaderDivision>
        <HeaderLinkLogin>Login</HeaderLinkLogin>
        <SignUpButton>Sign Up</SignUpButton>
        <ModalButton onClick={() => setModalOpen(true)}>
          <img src={hamburgerIcon} alt="hamburger icon" />
        </ModalButton>
      </HeaderDivision>
    </HeaderEl>
  );
}

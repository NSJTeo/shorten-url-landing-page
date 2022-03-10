import logo from '../assets/images/logo-white.svg';
import styled from 'styled-components';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import breakpoints from '../config/breakpoints';

const FooterEl = styled.footer`
  background: black;
  padding: 54px 0 56px 0;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    padding: 71px 165px 72px 163px;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const FooterLogo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 49.33px;
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
  }
`;

const FooterLinks = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: flex-start;
  }
`;

const FooterContainers = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

const FooterContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
    margin-left: 78px;
  }
`;

const FooterHeader = styled.h4`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.25px;
  color: #ffffff;
  margin-bottom: 22px;
`;

const LastFooterContainer = styled(FooterContainer)`
  margin-bottom: 48px;
  @media (min-width: ${breakpoints.desktop}) {
    margin-left: 107px;
  }
`;

const FooterLink = styled.a`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.234375px;
  color: #bfbfbf;
  text-decoration: none;
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
  @media (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

const Icons = styled.ul`
  display: flex;
  justify-content: center;
  @media (min-width: ${breakpoints.desktop}) {
    margin-left: 101px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: auto;
  margin-right: 24px;
  &:last-child {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <FooterEl>
      <FooterLogo src={logo} alt="" />
      <FooterLinks>
        <FooterContainers>
          <FooterContainer>
            <FooterHeader>Features</FooterHeader>
            <FooterLink href="/">Link Shortening</FooterLink>
            <FooterLink href="/">Branded Links</FooterLink>
            <FooterLink href="/">Analytics</FooterLink>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Resoures</FooterHeader>
            <FooterLink href="/">Blog</FooterLink>
            <FooterLink href="/">Developers</FooterLink>
            <FooterLink href="/">Support</FooterLink>
          </FooterContainer>
          <LastFooterContainer>
            <FooterHeader>Company</FooterHeader>
            <FooterLink href="/">About</FooterLink>
            <FooterLink href="/">Our Team</FooterLink>
            <FooterLink href="/">Careers</FooterLink>
            <FooterLink href="/">Contact</FooterLink>
          </LastFooterContainer>
        </FooterContainers>
        <Icons>
          <Icon src={facebookIcon} />
          <Icon src={twitterIcon} />
          <Icon src={pinterestIcon} />
          <Icon src={instagramIcon} />
        </Icons>
      </FooterLinks>
    </FooterEl>
  );
}

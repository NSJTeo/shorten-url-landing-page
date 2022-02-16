import logo from "../assets/images/logo-white.svg";
import styled from "styled-components";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

const FooterEl = styled.footer`
  background: black;
  padding: 54px 0 56px 0;
  align-items: center;
`;

const FooterLogo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 49.33px;
`;

const FooterContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const FooterHeader = styled.h4`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.25px;
  color: #ffffff;
  margin-bottom: 22px;
`;

const LastFooterContainer = styled(FooterContainer)`
  margin-bottom: 48px;
`;

const FooterLink = styled.a`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.234375px;
  color: #bfbfbf;
  text-decoration: none;
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
`;

const Icons = styled.ul`
  display: flex;
  justify-content: center;
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
      <Icons>
        <Icon src={facebookIcon} />
        <Icon src={twitterIcon} />
        <Icon src={pinterestIcon} />
        <Icon src={instagramIcon} />
      </Icons>
    </FooterEl>
  );
}

import logo from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";
import styled from "styled-components";

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
`;

export default function Header() {
  return (
    <HeaderEl>
      <img src={logo} alt="shortly logo" />
      <img src={hamburgerIcon} alt="hamburger icon" />
    </HeaderEl>
  );
}

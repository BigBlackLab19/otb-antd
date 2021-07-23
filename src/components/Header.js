import logo from "../static/otb-logo.png";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt="OnTheBlock" />
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  background-color: #f7f8fc;
`;

const Logo = styled.img`
  width: 250px;
  height: 85px;
`;

export default Header;

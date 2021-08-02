import { React } from 'react';
import styled from 'styled-components';

import logo from '../static/otb-logo.png';

function Header() {
  return (
    <Wrapper>
      <Logo alt="On The Block Logo" src={logo} />
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

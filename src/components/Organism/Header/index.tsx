import React from "react";
import Logo from "../../Molecules/Logo";
import NavBar from "../../Molecules/NavBar";
import SocialItems from "../SocialItems";
import { HeaderContainer } from "./style";

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <NavBar />
      </HeaderContainer>
      <SocialItems />
    </>
  );
};

export default Header;
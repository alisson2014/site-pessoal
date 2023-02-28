import Burguer from "../../Atoms/Burger";
import Logo from "../../Molecules/Logo";
import Nav from "../../Molecules/Nav";
import { HeaderContainer } from "./atoms";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Burguer />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
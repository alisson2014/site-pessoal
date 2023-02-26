import Logo from "../../Molecules/Logo";
import Nav from "../../Molecules/Nav";
import { HeaderContainer } from "./atoms";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
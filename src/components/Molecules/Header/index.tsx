import Logo from "../../Atoms/Logo";
import Nav from "../../Atoms/Nav";
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
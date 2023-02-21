import { HeaderContainer } from "./atoms";
import Logo from "../../Atoms/Logo";
import Nav from "../../Atoms/Nav";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
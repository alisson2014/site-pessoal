import Logo from "../../Molecules/Logo";
import NavBar from "../../Molecules/NavBar";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
import Header from "../Header";
import { Container } from "./atoms";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Header />
      {children}
      <footer>
        Footer
      </footer>
    </Container>
  );
};

export default Layout;
import Footer from "../Footer";
import Header from "../Header";
import { Container } from "./atoms";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
import Footer from "../Organism/Footer";
import Header from "../Organism/Header";
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
import { Outlet } from "react-router-dom";
import Footer from "../../components/Organism/Footer";
import Header from "../../components/Organism/Header";
import { Container } from "./style";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
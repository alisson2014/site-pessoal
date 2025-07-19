import { Outlet } from "react-router-dom";
import Header from "components/Organism/Header";
import { Container } from "./style";

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
import { Outlet } from "react-router-dom";
import Header from "components/Organism/Header";
import { Container } from "./style";
import React from "react";

const Layout: React.FC = () => {
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
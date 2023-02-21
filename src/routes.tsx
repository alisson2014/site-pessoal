import { Routes, Route } from "react-router-dom";
import { Abilities, About, Error404, Home, Projects } from "./pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/abilities" element={<Abilities />} />
    </Routes>
  );
};

export default AppRouter;
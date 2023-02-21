import { Routes, Route } from "react-router-dom";
import { Abilities, About, Home, Projects } from "./pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<div>404</div>} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/abilities" element={<Abilities />} />
    </Routes>
  );
};

export default AppRouter;
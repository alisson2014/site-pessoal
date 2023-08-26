import { Routes, Route } from "react-router-dom";
import {
  Abilities,
  About,
  Error404,
  Home,
  Projects,
  Layout
} from "pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="abilities" element={<Abilities />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
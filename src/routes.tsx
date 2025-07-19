import { Routes, Route } from "react-router-dom";
import { Error404, Layout } from "pages";
import LandingPage from "pages/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
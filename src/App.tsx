import { BrowserRouter } from "react-router-dom";
import { ResetCss } from "./globalStyles";
import AppRouter from "./routes";
import Layout from "./components/Molecules/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <ResetCss />
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

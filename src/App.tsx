import { BrowserRouter } from "react-router-dom";
import { ResetCss } from "./globalStyles";
import AppRouter from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ResetCss />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

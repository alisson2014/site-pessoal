import { BrowserRouter } from "react-router-dom";
import Header from "./components/Molecules/Header";
import AppRouter from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

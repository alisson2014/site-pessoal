import { BrowserRouter } from "react-router-dom";
import { ResetCss } from "./globalStyles";
import AppRouter from "./routes";
import AboutJsonProvider from "context/AboutJsonContext";
import React from "react";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ResetCss />
      <AboutJsonProvider>
        <AppRouter />
      </AboutJsonProvider>
    </BrowserRouter>
  );
};

export default App;

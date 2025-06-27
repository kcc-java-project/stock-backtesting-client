import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BacktestingPage from "./pages/backtesting";

import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BacktestingPage />
  </StrictMode>
);

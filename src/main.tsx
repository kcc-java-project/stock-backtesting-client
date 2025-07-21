import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignupPage from "./pages/signup";

import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SignupPage />
  </StrictMode>
);

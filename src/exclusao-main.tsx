import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import { AccountDeletionPage } from "@/pages/exclusao-de-conta";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccountDeletionPage />
  </StrictMode>
);

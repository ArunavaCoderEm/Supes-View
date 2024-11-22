import { mainChildren } from "@/Types/types";
import React, { StrictMode } from "react";
import { ThemeProvider } from "./Theme-Provider";
import { BrowserRouter } from "react-router-dom";

export default function CustomProvider({
  children,
}: mainChildren): React.ReactNode {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StrictMode>
          {children}
        </StrictMode>
      </ThemeProvider>
    </BrowserRouter>
  );
}

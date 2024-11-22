import { mainChildren } from "@/Types/types";
import React, { StrictMode } from "react";
import { ThemeProvider } from "./Theme-Provider";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function CustomProvider({
  children,
}: mainChildren): React.ReactNode {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <StrictMode>{children}</StrictMode>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

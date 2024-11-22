import Navbar from "@/components/Web/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BackgroundGrid from "./components/Syntax/BackGroundGrid";
import { useTheme } from "./Context/Theme-Provider";
import Footer from "./components/Syntax/Footer";

export default function Pages(): React.ReactNode {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <BackgroundGrid color={theme === "dark" ? "gray" : "#000"} />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

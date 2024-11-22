import Navbar from "@/components/Web/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BackgroundGrid from "./components/Syntax/BackGroundGrid";
import { useTheme } from "./Context/Theme-Provider";

export default function Pages(): React.ReactNode {

 const { theme } = useTheme();

  return (
    <div className="bg-gradient-to-b from-background via-backgroud to-muted p-2">
      <BackgroundGrid color={(theme === 'dark' ? "gray" : "#000")} />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
}

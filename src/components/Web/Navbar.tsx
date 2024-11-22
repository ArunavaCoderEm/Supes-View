import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/Context/Theme-Provider";
import { Moon, Sun } from "lucide-react";
import SearchDialouge from "./SearchDialouge";

export default function Navbar(): React.ReactNode {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-background/80 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/Assets/Supes_View_Logo.png"
                className="w-6"
                alt="Logo"
              />
            </div>

            <div className="flex items-center gap-6">
              <SearchDialouge />

              <div
                className={`cursor-pointer transition-all duration-500 flex items-center
                    ${theme === "dark" ? "rotate-180" : "rotate-0"}
                `}
              >
                {theme === "dark" ? (
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full outline outline-offset-2 outline-1 outline-white/50"
                    onClick={() => {
                      setTheme("light");
                    }}
                  >
                    <Sun className="text-orange-400 rotate-0 transition-all w-10" />
                  </Button>
                ) : (
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full p-3 outline outline-offset-2 outline-1 outline-black/50"
                    onClick={() => {
                      setTheme("dark");
                    }}
                  >
                    <Moon className="text-black rotate-0 transition-all w-10" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

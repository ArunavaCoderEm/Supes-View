import React from "react";
import { ChevronRight, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

export default function Hero(): React.ReactNode {

  const nav = useNavigate();

  const exploremore = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 1000
    })
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-8">
          <div className="flex items-center space-x-2">
            <Badge className="flex gap-2 px-4 shadow-md py-1">
              <Shield className="w-6 h-6" />
              <span className="rounded-lg font-semibold">
                GOTHAM'S GUARDIAN
              </span>
            </Badge>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
            Vengeance Has <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 shab dark:from-orange-300 dark:to-orange-500">
              {" "}
              A New Name :
            </span>
          </h1>

          <div className="border rounded-md shadow-md p-6 bg-muted">
            <blockquote className="text-lg font-medium text-foreground">
              "Everyone has weaknesses, but I choose to hide mine."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground text-right">
              — Batman
            </p>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl">
            Step into the shadows of Gotham City, where justice wears a cape and
            corruption meets its match. Join the Dark Knight in his relentless
            pursuit of justice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => nav('/details/71')} className="px-8 shadow-md py-4 bg-gradient-to-b hover:scale-95 from-orange-500 to-orange-700 font-semibold transition-all duration-200 flex items-center justify-center">
              Get Details
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => exploremore()}
              variant={"outline"}
              className="px-8 py-4 outline-2 outline-offset-0 outline-background shadow-md border-2 rounded-lg font-semibold transition-all flex items-center justify-center"
            >
              Explore More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center space-y-8">
          <img
            src="/Images/batman_hero_pic.jpeg"
            alt="batmanpic"
            className="w-full max-w-lg shadow-lg animate_custom_pulse lg:max-w-full h-80 lg:h-[32rem] object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

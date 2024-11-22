import React from "react";
import { ChevronRight, Shield } from "lucide-react";

export default function Hero(): React.ReactNode {

  return (
    <>
      <div className="relative min-h-screen">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-yellow-500" />
                <span className="text-yellow-500 font-semibold">
                  GOTHAM'S GUARDIAN
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
                Vengeance Has
                <span className="text-yellow-500"> A New Name</span>
              </h1>

              <p className="text-gray-300 text-lg max-w-xl">
                Step into the shadows of Gotham City, where justice wears a cape
                and corruption meets its match. Join the Dark Knight in his
                relentless pursuit of justice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center">
                  Join the Mission
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Active", value: "80+" },
              { label: "Villains Caught", value: "1000+" },
              { label: "Gadgets", value: "250+" },
              { label: "Combat Styles", value: "127" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-500">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

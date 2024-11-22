import { FetchSuperHeroDetailsQueryid } from "@/Hooks/FetchSuperHeroDetails";
import { Shield, Trophy } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsPageSupes(): React.ReactNode {

    const { id } = useParams();
    
    const { data, isLoading, isError, error } = FetchSuperHeroDetailsQueryid(Number(id) ?? 0);

  return (
    <>
      <div className="min-h-screen bg-black text-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
  
            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={data?.image?.url}
                  alt={data?.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300 font-semibold">
                  {data?.id}
                </span>
              </div>
            </div>

            {/* Hero Details Section */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="h-10 w-10 text-gray-400" />
                  <h1 className="text-4xl font-bold text-white">
                    {data?.name}
                  </h1>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {/* {data?.description} */}
                </p>
              </div>

              {/* Stats Grid */}

              {/* Abilities Section */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Special Abilities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {/* {selectedHero.abilities.map((ability, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm bg-zinc-900 text-gray-300 border border-zinc-800"
                    >
                      {ability}
                    </span>
                  ))} */}
                </div>
              </div>

              {/* Hero Selection */}
              <div className="pt-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Other Heroes
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* {heroes
                    .filter((h) => h.id !== selectedHero.id)
                    .map((hero) => (
                      <div
                        key={hero.id}
                        onClick={() => setSelectedHero(hero)}
                        className="bg-zinc-900 p-3 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors"
                      >
                        <h3 className="font-medium text-white">{hero.name}</h3>
                        <p className="text-sm text-gray-400">{hero.rank}</p>
                      </div>
                    ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

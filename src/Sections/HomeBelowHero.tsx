import { Skeleton } from "@/components/ui/skeleton";
import { FetchRandomSupesN } from "@/Hooks/FetchSuperHeroDetails";
import React from "react";

export default function HomeBelowHero(): React.ReactNode {

  const { data, isLoading, isError, error } = FetchRandomSupesN(10);

  //   if (isLoading) {
  //     return <Skeleton className="h-[125px] w-[250px] rounded-xl" />;
  //   }

  //   if (isError) {
  //     console.error("Error:", error);
  //   }

  //   if (data) {
  //     console.log("Fetched Data:", data);
  //   }

  return (
    <>
      <div className="my-10 container">
        <h1 className="text-transparent text-5xl font-bold leading-tight bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 shab dark:from-orange-300 dark:to-orange-500">
          Top Superheroes Today :
        </h1>
      </div>

      {isLoading && <Skeleton className="h-[125px] w-[250px] rounded-xl" />}
     

      
      


    </>
  );
}

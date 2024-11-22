import { FetchRandomSupesN, FetchSuperHeroDetailsQueryid } from "@/Hooks/FetchSuperHeroDetails";
import React from "react";

export default function HomeBelowHero(): React.ReactNode {

    const { data, isLoading, isError, error } = FetchSuperHeroDetailsQueryid(30);

    if (isLoading) {
      console.log("Loading...");
    }
    
    if (isError) {
      console.error("Error:", error);
    }
    
    if (data) {
      console.log("Fetched Data:", data);
    }

  return <div>HomeBelowHero</div>;
}

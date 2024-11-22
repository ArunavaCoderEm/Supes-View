import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FetchRandomSupesN } from "@/Hooks/FetchSuperHeroDetails";
import React from "react";

export default function HomeBelowHero(): React.ReactNode {
  const { data, isLoading, isError, error } = FetchRandomSupesN(10);

  if (isError) {
    console.error("Error:", error);
  }

  if (data) {
    console.log("Fetched Data:", data);
  }

  return (
    <>
      <div className="my-10 container">
        <h1 className="text-transparent text-5xl font-bold leading-tight bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500">
          Top Superheroes Today:
        </h1>

        {!isLoading && data && !isError && (
          <div className="grid mt-10 md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4">
            {data.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Content about {item.name}</p>
                </CardContent>
                <CardFooter>
                  <p>More details here</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-[125px] w-[250px] rounded-xl" />
          ))}
        </div>
      )}
    </>
  );
}

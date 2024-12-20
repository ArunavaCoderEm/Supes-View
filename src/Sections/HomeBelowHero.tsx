import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { UseFav } from "@/Hooks/UseFav";
import { RefreshCcw } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeBelowHero(): React.ReactNode {
  const wholeData = FetchRandomSupesN(12);
  const { data, isLoading, isError, error } = wholeData;

  const [load, setload] = useState<boolean>(false);

  const handleClick = async () => {
    setload(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    wholeData.refetch();
    setload(false);
  };

  const { favs } = UseFav();

  const [visibleCount, setVisibleCount] = useState<number>(4);

  const loadMore = () => {
    if (!isLoading) {
      setVisibleCount(data?.length || 0);
    }
  };

  const showless = () => {
    if (!isLoading) {
      setVisibleCount(4);
    }
  };

  if (isError) {
    console.error("Error:", error);
  }

  return (
    <>
      <div className="my-10">
        <h1 className="mt-4 text-transparent text-5xl font-bold leading-tight bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500">
          Your Favourite Superheroes :
        </h1>

        {!favs.length && (
          <p className="text-foreground px-2 mt-5 text-lg">
            No Favourites, Add Some !!
          </p>
        )}

        {!isLoading && favs && !isError && (
          <div className="grid mt-10 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favs.map((item, index) => {
              return (
                <>
                  <Link to={`/details/${item.id}`} key={index}>
                    <Card>
                      <CardHeader>
                        <img
                          src={item?.image?.url}
                          className="rounded-md shadow-md h-64 aspect-square"
                          alt="HeroImg"
                        />
                        <div className="py-2">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <CardDescription>{item.name}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        <Badge>{item?.appearance?.gender}</Badge>
                        <Badge>{item?.appearance?.race}</Badge>
                        <Badge>{item?.appearance?.height[0]}</Badge>
                        <Badge>{item?.appearance?.weight[0]}</Badge>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-2 justify-start">
                        <p className="text-muted-foreground text-left">
                          <span className="text-foreground">Pub : </span>
                          {item?.biography?.publisher}
                        </p>
                      </CardFooter>
                    </Card>
                  </Link>
                </>
              );
            })}
          </div>
        )}
        {!isLoading && data && !isError && (
          <div className="mx-auto w-full">
            <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-end gap-2 items-center">
              <h1 className="mt-4 text-transparent text-5xl font-bold leading-tight bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500">
                Top Superheroes Today:
              </h1>
              <Button onClick={handleClick} className="mb-2">
                <RefreshCcw
                  className={`${
                    load ? "animate-spin" : ""
                  } dark:text-black text-white`}
                />
              </Button>
            </div>
            <div className="grid mt-10 md:grid-cols-3 mx-auto w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data &&
                data?.length && !load &&
                data.slice(0, visibleCount).map((item, index) => (
                  <Link className="w-full mx-auto flex items-center justify-center" to={`/details/${item.id}`} key={index}>
                    <Card className="mx-auto h-[31rem]">
                      <CardHeader>
                        <img
                          src={item?.image?.url}
                          className="rounded-md shadow-md h-64 aspect-square"
                          alt="HeroImg"
                        />
                        <div className="py-2">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <CardDescription>{item.name}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        <Badge>{item?.appearance?.gender}</Badge>
                        <Badge>{item?.appearance?.race}</Badge>
                        <Badge>{item?.appearance?.height[0]}</Badge>
                        <Badge>{item?.appearance?.weight[0]}</Badge>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-2 justify-start">
                        <p className="text-muted-foreground text-left">
                          <span className="text-foreground">Pub : </span>
                          {item?.biography?.publisher}
                        </p>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}

            </div>
              {(isLoading || load) && (
                <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-[125px] w-[250px] left-0 right-0 mx-auto rounded-xl"
                    />
                  ))}
                </div>
              )}
            {visibleCount < data.length && !load && (
              <div className="mt-4 text-center">
                <Button
                  onClick={loadMore}
                  className="px-4 py-2 shadow-lg bg-muted text-orange-500"
                >
                  Load More
                </Button>
              </div>
            )}
            {visibleCount >= data.length && !load && (
              <div className="mt-4 text-center">
                <Button
                  onClick={showless}
                  className="px-4 py-2 shadow-lg bg-muted text-orange-500"
                >
                  Show Less
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

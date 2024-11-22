import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import StatCard from "@/components/Web/HeroDetails";
import { FetchSuperHeroDetailsQueryid } from "@/Hooks/FetchSuperHeroDetails";
import { UseFav } from "@/Hooks/UseFav";
import { Superhero } from "@/Types/types";
import { Shield, StampIcon, Star, Trophy } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export default function DetailsPageSupes(): React.ReactNode {
  const { id } = useParams();

  const { data, isLoading, isError, error } = FetchSuperHeroDetailsQueryid(
    Number(id) ?? 0
  );

  const { addFavs, removeFav, isFav } = UseFav();

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    return <Skeleton />;
  }

  const toUp = (s: string) => {
    const news: string = s[0].toUpperCase() + s.slice(1);
    return news;
  };

  const isfavourite = isFav(data?.id);

  console.log(isfavourite)

  const handleFavs = (data: Superhero | null | undefined) => {
    if (isfavourite) {
      removeFav.mutate(data?.id);
      toast.error("Removed From Favs");
    } else {
      addFavs.mutate({
        ...data,
      });
      toast.success("Added To Favs");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-transparent text-5xl font-bold leading-tight bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 text-center dark:from-orange-300 dark:to-orange-500">
        {data?.name} Details
      </h1>
      <div className="min-h-screen bg-background text-foreground">
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
              <div className="absolute top-4 right-4 bg-muted backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground font-semibold">
                  {data?.id}
                </span>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Character Info
                </h2>
                <div className="flex flex-wrap gap-3">
                  {data?.appearance &&
                    Object.entries(data?.appearance).map(
                      ([key, value], index) => {
                        if (value && value.length >= 2) {
                          return (
                            <div key={index}>
                              <p>
                                <strong>
                                  {key.replace(/-/g, " ").toUpperCase()}:
                                </strong>{" "}
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : value}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }
                    )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="h-10 w-10 text-muted-foreground" />
                  <h1 className="text-4xl font-bold text-foreground">
                    {data?.name}
                  </h1>
                  <Button
                    variant={isfavourite ? "default" : "outline"}
                    className={
                      isfavourite ? "bg-yellow-500 hover:bg-yellow-600" : ""
                    }
                    onClick={() => handleFavs(data)}
                  >
                    <Star /> {isfavourite ? "Remove" : "Add"}
                  </Button>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data?.connections?.["group-affiliation"]}
                </p>
              </div>

              <div className="grid gap-2 md:grid-cols-2 grid-cols-1">
                {data?.powerstats &&
                  Object.keys(data.powerstats).map((item, index) => {
                    const statValue = Number(
                      data.powerstats[item as keyof typeof data.powerstats]
                    );
                    return (
                      <div key={index}>
                        <StatCard
                          label={toUp(item)}
                          value={Number(statValue)}
                          icon={<StampIcon />}
                        />
                      </div>
                    );
                  })}
              </div>

              <div className="py-1">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Relatives
                </h2>
                <div className="flex flex-wrap gap-2 p-2">
                  {data?.connections?.relatives
                    .split(",")
                    ?.map((item, index) => {
                      return (
                        <div key={index} className="">
                          <Badge>{item}</Badge>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Personal Info
                </h2>
                <div className="flex flex-wrap gap-3">
                  {data?.biography &&
                    Object.entries(data?.biography).map(
                      ([key, value], index) => {
                        if (value && value.length >= 2) {
                          return (
                            <div key={index}>
                              <p>
                                <strong>
                                  {key.replace(/-/g, " ").toUpperCase()}:
                                </strong>{" "}
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : value}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

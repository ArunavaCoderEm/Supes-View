import React, { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { Button } from "../ui/button";
import { Loader2, Search, SearchIcon } from "lucide-react";
import { FetchSuperHeroDetailsQuerySearch } from "@/Hooks/FetchSuperHeroDetails";
import { useNavigate } from "react-router-dom";

export default function SearchDialouge(): React.ReactNode {
  const [open, setOpen] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");

  const nav = useNavigate();

  const { data, isLoading, isError, error } =
    FetchSuperHeroDetailsQuerySearch(query);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="text-muted-foreground flex items-center justify-start w-48 cursor-text"
      >
        <Search />
        Search here ...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Type a superhero or search..."
        />
        <CommandList>
          {query.length > 2 && !isLoading && (
            <CommandEmpty>No hero found.</CommandEmpty>
          )}
          <CommandSeparator />
          <CommandGroup className="my-2" heading="Favourites">
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup className="my-2" heading="Favourites">
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {data && data?.length > 0 && (
            <CommandGroup className="my-2" heading="Suggessions">
              {isLoading && (
                <div className="p-3 flex justify-center items-center">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              )}
              {data?.map((item, index) => {
                return (
                  <CommandItem onSelect={() => {nav(`/details/${item?.id}`); setOpen(false)}} key={index}>
                    <SearchIcon className="w-4 h-4 text-muted-foreground" />
                    <span>{item?.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}

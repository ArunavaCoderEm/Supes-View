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
import { Clock, Loader2, Search, SearchIcon, XCircle } from "lucide-react";
import { FetchSuperHeroDetailsQuerySearch } from "@/Hooks/FetchSuperHeroDetails";
import { useNavigate } from "react-router-dom";
import { UseSearchHIstory } from "@/Hooks/UseSearchHIstory";

export default function SearchDialouge(): React.ReactNode {
  const [open, setOpen] = useState<boolean>(false);

  const { history, addHistory, clearHistory } = UseSearchHIstory();

  const [query, setQuery] = useState<string>("");

  const nav = useNavigate();

  const handleSelectItem = (item: any): void => {
    addHistory.mutate({
      ...item
    });

    nav(`/details/${item?.id}`);
    setOpen(false);
  };

  const { data, isLoading, isError, error } =
    FetchSuperHeroDetailsQuerySearch(query);

  if (isError) {
    console.log(error);
  }

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
          {history.length > 0 && (
            <CommandGroup className="my-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-foreground">Recent Searches</p>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  onClick={() => {clearHistory.mutate(); setOpen(false)}}
                  className="text-foreground"
                >
                  <XCircle className="w-4 h-4 text-muted-foreground" />
                  Clear History
                </Button>
              </div>
              {history.map((item, index) => {
                return (
                  <CommandItem
                    className="cursor-pointer"
                    onSelect={() => handleSelectItem(item)}
                    key={index}
                  >
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{item?.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
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
                  <CommandItem
                    className="cursor-pointer"
                    onSelect={() => handleSelectItem(item)}
                    key={index}
                  >
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

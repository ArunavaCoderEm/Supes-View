import React, { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../UI/command";
import { Button } from "../UI/button";
import { Search } from "lucide-react";

export default function SearchDialouge(): React.ReactNode {
  const [open, setOpen] = useState<boolean>(false);

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
        <CommandInput placeholder="Type a superhero or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}

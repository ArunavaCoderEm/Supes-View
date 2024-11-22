import { ReactNode } from "react";

export interface mainChildren {
  children: ReactNode;
}

export interface BackgroundGridProps {
  color: string;
  cellSize: string | number;
  strokeWidth: number | string;
  className?: string;
  fade?: boolean;
}

export interface Superhero {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  image: {
    url: string;
  };
}

export interface searchRes {
  response: string;
  "results-for": string;
  results: Superhero[];
}

export interface createParams {
  key: string;
  value: string | number;
}

export interface SuperheroStats {
  response?: string;
  id: string;
  name: string;
  intelligence?: string;
  strength?: string;
  speed?: string;
  durability?: string;
  power?: string;
  combat?: string;
  "full-name"?: string;
  "alter-egos"?: string;
  aliases?: string[];
  "place-of-birth"?: string;
  "first-appearance"?: string;
  publisher?: string;
  alignment?: string;
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  "eye-color"?: string;
  "hair-color"?: string;
  occupation?: string;
  base?: string;
  "group-affiliation"?: string;
  relatives?: string;
  image?: {
    url?: string;
  };
}

import { newSuperheroApi } from "@/Api/Superhero";
import { useQuery } from "@tanstack/react-query";

export const HeroKeys = {
    heroid: (id: number) => ["heroid", id] as const,
    herosearch: (search: string) => ["heroseach", search] as const,
    herosearchmore: (searchpar: string) => ["heroseachmore", searchpar] as const,
}

export function FetchSuperHeroDetailsQueryid (id: number | null) {

    return useQuery({
        queryKey: HeroKeys?.heroid(id ?? 60),
        queryFn: () => id ? newSuperheroApi?.getSuperHeroDetailbyId(id) : null,
        enabled: !! id
    })
    
}

export function FetchSuperHeroDetailsQuerySearch (search: string | null) {

    return useQuery({
        queryKey: HeroKeys?.herosearch(search ?? "batman"),
        queryFn: () => search ? newSuperheroApi?.getSuperHeroSearchResult(search) : null,
        enabled: !! search
    })

}

export function FetchSuperHeroDetailsQuerySearchMore (searchPars: (number | string[])[]) {

    return useQuery({
        queryKey: HeroKeys?.herosearch(String(searchPars[0]) ?? "70"),
        queryFn: () => searchPars ? newSuperheroApi?.getSuperHeroIdMorehResult(searchPars) : null,
        enabled: !! searchPars
    })

}

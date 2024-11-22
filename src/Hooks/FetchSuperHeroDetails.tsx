import { useQuery } from "@tanstack/react-query";

export default function FetchSuperHeroDetailsQueryid (id: number | null) {

    useQuery({
        queryKey: [id]
    })
  
}

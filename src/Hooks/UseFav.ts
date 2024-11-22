import { useLocalStorage } from "@/Helper/UseLocalStorage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function UseFav() {
  const [favs, setFavs] = useLocalStorage<any[]>("favs-hist", []);

  const queryCl = useQueryClient();

  const favourite = useQuery({
    queryKey: ["favs-hist"],
    queryFn: () => favs,
    initialData: favs,
    staleTime: Infinity,
  });

  const addFavs = useMutation({
    mutationFn: async (favsPar: any) => {
      const newFav = {
        ...favsPar,
      };

      const filteredFavs = favs.some((item) => item.id === favsPar.id);

      if (filteredFavs) {
        return favs;
      }

      const newf = [...favs, newFav].slice(0, 10);

      setFavs(newf);
      return newf;
    },
    onSuccess: () => {
      queryCl.invalidateQueries({
        queryKey: ["favs-hist"],
      });
    },
  });

  const removeFav = useMutation({
    mutationFn: async (supeid: string | number) => {
      const filteredFavsRem = favs.filter((item) => item.id == supeid);
      setFavs(filteredFavsRem);
      return filteredFavsRem;
    },
    onSuccess: () => {
      queryCl.invalidateQueries({
        queryKey: ["favs-hist"],
      });
    },
  });

  return {
    favs: favourite?.data ?? [],
    addFavs,
    removeFav,
    isFav: (supeId: number | string) => {
        favs.some((item) => item.id === supeId)
    }
  };
}

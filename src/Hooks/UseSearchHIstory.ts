import { useLocalStorage } from "@/Helper/UseLocalStorage"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function UseSearchHIstory() {

  const [store, setStore] = useLocalStorage<any[]>(
    "search-history", 
    []
  )

  const queryCl = useQueryClient();

  const history = useQuery({
    queryKey: ["search-history"],
    queryFn: () => store,
    initialData: store
  })

  const addHistory = useMutation({
    mutationFn: async (search: any) => {
        const newSearch = {
            ...search
        }

        const filteredHis = store.filter((item) => !(item.id === search.id))

        const newh = [newSearch, ...filteredHis].slice(0, 10);

        setStore(newh);
        return newh;
    },
    onSuccess: (newh) => {
        queryCl.setQueryData(["search-history"], newh);
    }
  })

  const clearHistory = useMutation({
    mutationFn: async () => {
        setStore([]);
        return [];
    },
    onSuccess: () => {
        queryCl.setQueryData(["search-history"], []);
    }
  })

  return {
    history: history?.data ?? [],
    addHistory,
    clearHistory
  }
}

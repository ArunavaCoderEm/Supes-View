import { useLocalStorage } from "@/Helper/UseLocalStorage"
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"

export function UseSearchHIstory() {

  const [store, setStore] = useLocalStorage<any[]>(
    "search-history", 
    []
  )

  const queryCl = new QueryClient();

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
        return store;
    },
    onSuccess: (newh) => {
        queryCl.setQueryData(["search-hostory"], newh);
    }
  })

  const clearHistory = useMutation({
    mutationFn: async () => {
        setStore([]);
        return [];
    },
    onSuccess: () => {
        queryCl.setQueryData(["search-hostory"], []);
    }
  })

  return {
    history: history?.data ?? [],
    addHistory,
    clearHistory
  }
}

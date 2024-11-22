import { useEffect, useState } from "react";

export function useLocalStorage <T> (key: string, initval: T) {
    const [store, setStore] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initval
        } catch(e: any) {
            console.log(e);
            return initval
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(store))
        } catch(e: any) {
            console.log(e);
        }
    }, [key, store])

    return [store, setStore] as const;
} 
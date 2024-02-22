import { createContext, useContext } from "react";
import ActivityStores from "./activityStore";

interface Store {
    activityStore: ActivityStores
}

export const store: Store = {
    activityStore: new ActivityStores()
}

export const StoreContex = createContext(store);

export function useStore(){
    return useContext(StoreContex);
}
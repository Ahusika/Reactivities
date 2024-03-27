import { createContext, useContext } from "react";
import ActivityStores from "./activityStore";
import CommonStore from "./CommonStore";

interface Store {
    activityStore: ActivityStores,
    commonStore: CommonStore
}

export const store: Store = {
    activityStore: new ActivityStores(),
    commonStore: new CommonStore()
}

export const StoreContex = createContext(store);

export function useStore(){
    return useContext(StoreContex);
}
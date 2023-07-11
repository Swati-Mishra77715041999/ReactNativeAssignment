import { ADD_ITEMS } from "./constants";

export function addToArray(item){
    return{
        type:ADD_ITEMS,
        data: item
    }
}
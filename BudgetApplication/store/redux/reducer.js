import {ADD_ITEMS} from './constants';

const initialState=[]

export const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_ITEMS:
            return[
                ...state,
                action.data
            ]
        default:
            return state
    }
}
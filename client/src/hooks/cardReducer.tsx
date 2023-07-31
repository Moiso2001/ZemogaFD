/* React */
import { useReducer } from "react";

/* Definitions */
import { TheCard } from "../components/types/card";


/* Our initial state to be passed to reducer */
const INITIAL_STATE: CardInitialState = {
    cards: []
}

/* Definition of the intial state of our reducer */
export type CardInitialState = {
    cards: TheCard[] | []
}

/* Definition of our reducer actions */
export type CardActions = {
    type: 'get_all'
    payload: CardInitialState[]
}

const cardReducer = (state: CardInitialState, action: CardActions) => {
    switch (action.type) {
        case 'get_all':
            return{
                ...state
            }
    }
}

const useCardReducer = () => {
    return useReducer(cardReducer, INITIAL_STATE)
}

export default useCardReducer
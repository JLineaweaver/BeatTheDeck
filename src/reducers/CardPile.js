import {INCREMENT} from '../constants/ActionTypes'

const initialState = {
    cardPile: 0
}

export function CardPile(state = initialState.cardPile, action) {
    switch(action.type) {
        case INCREMENT:
            state = state + 1;
            return state;
        default:
            return state;
    }
}
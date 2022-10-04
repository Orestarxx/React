import {useReducer} from "react";

import {actions} from "./Actions";

const reducer = (state, action) => {

    switch (action.type) {
        case actions.ADD:
            const id = state.length ? state[state.length - 1].id + 1 : 1
            const name = action.payload.name

            return [...state, {id, name}]
        case actions.DELETE:
            const index = state.findIndex(cat => cat.id === action.payload.id)

            if (index !== -1) {
                state.splice(index, 1)
            }
            return [...state]
        default:
            return [...state]
    }
}


const usePetReducer = () => useReducer(reducer, [])


export {usePetReducer}
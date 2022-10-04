import React, {useReducer} from 'react';

const red = (state,action) =>{
    const {type,payload} = action;
    switch (type){
        case 'addCat':
            return{...state, cats:[...state.cats,{name:payload,id:Date.now()}]}
        case 'deleteCat':
            const indexCat = state.findIndex(cat => cat.id === action.payload.id)
        if (indexCat !== -1){
            indexCat.splice(index, 1)
        }
            return [...state]
        default:
            console.log('')
            return state;
    }

}


const ReducerSecond = () => {

   const [state,dispatch] = useReducer(reducer,{cats:[],dogs:[]})
    return (
        <div>

        </div>
    );
};

export {ReducerSecond};
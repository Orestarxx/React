import React from 'react';
import {useRef} from "react";

import {actions2} from "../actions/actions2";
import {useAnimalReducer} from "./reducerSecond";


const ReducerTwo = () => {

    const catCreator = useRef()
    const dogCreator = useRef()
    const [catState, catDispatch] = useAnimalReducer()
    const [dogState, dogDispatch] = useAnimalReducer()
    return (
        <div>
            <div style={{height: '100px', display: 'flex', justifyContent: 'center'}}>
                <div>
                    <label>Cats: <input type="text" ref={catCreator}/></label>
                    <button
                        onClick={() => catDispatch({type: actions2.ADDCAT, payload: catCreator.current.value})}>Save
                    </button>
                </div>
                <div>
                    <label>Dogs: <input type="text" ref={dogCreator}/></label>
                    <button
                        onClick={() => dogDispatch({type: actions2.ADDDOG, payload: dogCreator.current.value})}>Save
                    </button>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }}>{catState.cats.map(cat => (<div key={cat.id}>{cat.name}
                    <button onClick={() => catDispatch({type: actions2.DELETECAT, payload: cat.id})}>Delete</button>
                </div>))}</div>
                <div
                    style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }}>{dogState.dogs.map(dog => (<div key={dog.id}>{dog.name}
                    <button onClick={() => dogDispatch({type: actions2.DELETEDOG, payload: dog.id})}>Delete</button>
                </div>))}</div>

            </div>

        </div>
    );
};

export {ReducerTwo};
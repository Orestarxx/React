
import "./App.css"
import {useRef} from "react";
import {actions, usePetReducer} from "./Reducer";


function App() {
    const cats = useRef()
    const dogs = useRef()
    const [catState, catDispatch] = usePetReducer()
    const [dogState, dogDispatch] = usePetReducer()


    const addCat = () => {
        catDispatch({type: actions.ADD, payload: {name: cats.current.value}})

    }

    const addDog = () => {
        dogDispatch({type: actions.ADD, payload: {name: dogs.current.value}})

    }

    const deleteCat = (id) => {
        catDispatch({type: actions.DELETE, payload: {id}})
    }

    const deleteDog = (id) => {
        dogDispatch({type: actions.DELETE, payload: {id}})
    }


    return (<div>
            <div style={{height: '100px', display: 'flex', justifyContent: 'center'}}>

                <label>
                    Add Cat: <input type="text" ref={cats}/>
                    <button onClick={addCat}>Send</button>
                </label>
                <label>
                    Add Dog: <input type="text" ref={dogs}/>
                    <button onClick={addDog}>Send</button>
                </label>

            </div>
            <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                <div>

                    {catState.map(cat => <div key={cat.id}>
                        {cat.name}
                        <button onClick={() => deleteCat(cat.id)}>delete cat</button>
                    </div>)}
                </div>
                <div>
                    {dogState.map(dog => <div key={dog.id}>
                        {dog.name}
                        <button onClick={() => deleteDog(dog.id)}>delete dog</button>
                    </div>)}
                </div>
            </div>
            <div>

            </div>


        </div>

    );
}

export default App;

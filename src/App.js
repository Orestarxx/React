import {useReducer} from "react";
import "./App.css"
import {useForm} from "react-hook-form";
const fill = (initial) =>{
    return [{cat:initial,dog:initial}]
}
const reducer = (state,action) =>{
    console.log(action);
    switch (action.type) {
        case 'Cat':
            return {...state, cat: state.cat + state}
    }

    return {...state}

}

function App() {
const [state,dispatch] = useReducer(reducer,[{cats:{},dogs:{}}],fill)


    return (<div>
            <div className='formHolder'>
            <form onSubmit={() => dispatch({type:'Cat'})}>
                <input type="text"/>
                <button>save dog</button>
            </form>
            <form>
                <input type="text"/>
                <button >Save Cat</button>
            </form>
            </div>
            <div className='petsHolder'>
            <div className='pets'>{state.cat}</div>
            <div className='pets'>{state.dog}</div>

            </div>

      </div>

  );
}

export default App;

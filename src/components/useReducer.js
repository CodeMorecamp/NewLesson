import { useReducer } from "react"

function UserForm () {
        const [state, dispatch] = useReducer((state, action) => ({
            ...state,
            ...action
        }), {
            first: "", 
            last: ""
        } )
    return (
        <div>
            <input
            type='text'
            value= {state.first}
            onChange= {e => dispatch ({ first: e.target.value})}
        /> 
         <input
            type='text'
            value= {state.last}
            onChange= {e => dispatch ({ last: e.target.value})}
        />

        <div>
            First: {state.first}  Last: {state.last}
        </div>
        </div>
    )
}

function UseReducer() {
    const [state, dispatch] = useReducer ((state, action) => {
        switch(action.type) {
            case "SET_NAME":
                return {...state, name:action.payload}
            case "ADD_NAME":
                return {
                    ...state, 
                    names: [...state.names, action.name], 
                    name: ""
                }

        }
    }, {
        names: [],
        name: ""
    })
    return  (<div>
      <div>
        <UserForm />
        {state.names.map((name, n)=> (
            <div key={n}>{name}</div>
        ))}
      </div>
      <input
            type='text'
            value= {state.name}
            onChange= {e => dispatch ({ type: "SET_NAME", payload: e.target.value})}
        /> 
        <div> Name= {state.name}</div>
        <button onClick={() => dispatch ({type: "ADD_NAME"})}> Add Name</button>
    </div>
)}

export default UseReducer
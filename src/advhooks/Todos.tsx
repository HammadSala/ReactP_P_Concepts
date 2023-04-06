import react from "react"
import { useReducer } from "react"

const initialTodo = [
    {
        id : 1,
        title : "Be Good",
        complete: false
    },
    {
        id : 2,
        title : "Do Good",
        complete: false
    }
]

const reducer = ( state : any, action : any ) =>{
    switch(action.type) {
        case "COMPLETE":
            return state.map( (todo : any) => {
                if ( todo.id === action.id) {
                    return { ...todo, complete: !todo.complete}
                } else
                    return todo;
            });
        default:
            return state
    }

}


function Todo () {

    const[todos, dispatch] = useReducer(reducer, initialTodo)

    const handleChange =(todo : any) =>{
        console.log("before" , todo.id, todo.complete);
        dispatch( { type : "COMPLETE", id: todo.id })
        console.log("After" , todo.id, todo.complete);

    }
    return (
        <>
            { todos.map ( (todo: any) => (
                <div key={todo.id}>
                    <label>
                        {todo.title} <span></span> {todo.id}
                        <input type="checkbox" 
                                name="todo"
                                checked={todo.complete}
                                onChange={ () =>handleChange(todo)} />
                    </label>

                </div>
            ))}
        </>
    )


}


export default Todo;
import React, { useState } from "react"

interface TodoProps {
    text: string | number
    completed: boolean
}

const Todo: React.FC = () => {
    const [todo, setTodos] = useState<TodoProps[]>([])
    const [input, setInput] = useState<string>(" ")

    const handleClick = () => {
        const newtodo: TodoProps = {text: input, completed: false }
        setTodos([...todo, newtodo])
        setInput("")
    }

    const handleDelete = (index: number) => {
        console.log(index)
        setTodos(
            todo.filter((val,ind) =>  ind !== index)
        );    
    }

    return (
        <>
            <h1>Todo APP</h1>
            <ul>
                {todo.map((task,index) => {return(
                <div key={index}>
                     <li key={index} >{task.text}</li>
                     <button onClick={()=>{handleDelete(index)}}>Delete</button>
                     <button onClick={()=>{handleDelete(index)}}>Delete</button>
                     <input type="text" />
                   </div>
                )})}
            </ul>
            <input type="text" placeholder="Enter a task" onChange={e => setInput(e.currentTarget.value)} value={input}/>
            <button onClick={handleClick}>Add</button>
       
        </>
    )
}

export default Todo
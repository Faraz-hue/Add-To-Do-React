import React from "react"

export default function () {

    const [todo, setTodo] = React.useState("")
    const [todos, setTodos] = React.useState([])
    function handleTodo() {
        setTodos([...todos, todo])
        setTodo("")
    }

    return (
        <div>
            <h1>To do task</h1>
            <label htmlFor="addToDo">
                <input
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    id="addToDo"
                    type="text"
                    name="addToDo"
                    className="addToDo"
                    placeholder="Wakeup" />
            </label>
            <button
                onClick={handleTodo}
                className="addbtn">Add Task to the List</button>
            <ul>
                {todos.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

        </div>
    )
} 
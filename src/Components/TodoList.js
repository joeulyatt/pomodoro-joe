import React, { useState } from "react";
import "../App"
import Todo from "./TodoItem"
import TodoForm from "./TodoForm"

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addItem = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };
    
    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addItem={addItem}/>
                {todos.map((todo, index) => (
                    <Todo 
                        key={index}
                        // index={index}
                        item={todo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
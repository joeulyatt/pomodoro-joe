import React, { useState } from "react";
import "../App"
import Todo from "./TodoItem"
import TodoForm from "./TodoForm"

function TodoList() {
    const [todos, setTodos] = useState([{
        text: "Enter A Task Here!",
        isCompleted: false
    }]);

    const addItem = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const removeItem = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    
    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addItem={addItem}/>
                {todos.map((todo, index) => (
                    <Todo 
                        key={index}
                        index={index}
                        item={todo}
                        removeItem={removeItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
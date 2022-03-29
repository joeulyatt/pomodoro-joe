import React, { useState } from "react";
import Todo from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([{
        text: "Enter A Task Above!",
        isCompleted: false
    }]);

    const addItem = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const completeItem = index => {
        const newTodos = [...todos];
        let complete = newTodos[index].isCompleted
        if (complete) {
            complete = false
        } else {
            complete = true
        };
        newTodos[index].isCompleted = complete;
        setTodos(newTodos);
    };

    const removeItem = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-list">
            <TodoForm addItem={addItem}/>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    item={todo}
                    completeItem={completeItem}
                    removeItem={removeItem}
                />
            ))}
        </div>
    );
}

export default TodoList;
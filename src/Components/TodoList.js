import "../App"
import Todo from "./Todo"
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { text: "deault pomodoro Text"}
    ]);
    
    return (
        <div className="App">
            <div class="todo-list">
                {todos.map((todo, index) => (
                    <Todo 
                        key={index}
                        index={index}
                        todo={todo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
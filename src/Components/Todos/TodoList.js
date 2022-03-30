import Todo from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = ( { todos, addItem, completeItem, removeItem }) => {

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
};

export default TodoList;
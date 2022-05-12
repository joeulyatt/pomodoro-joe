import React from 'react';

const Todo = ({ item, index, removeItem, completeItem }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: item.isCompleted ? 'line-through' : '' }}
        >
            {item.text}
            <div>
                <button onClick={() => completeItem(index)}>✓</button>
                <button onClick={() => removeItem(index)}>X</button>
            </div>
        </div>
    );
};

export default Todo;

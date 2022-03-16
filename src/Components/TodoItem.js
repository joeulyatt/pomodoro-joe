import React from "react";

function Todo ({ item, index, removeItem, completeItem }) {
    return (
    <div
        className="todo"
        style={{textDecoration: item.isCompleted ? "line-through" : ""}}
    >
            {item.text}
            <div>
                <button onClick={() => completeItem(index)}>Complete</button>
                <button onClick={() => removeItem(index)}>X</button>
            </div>
    </div>
    );
};

export default Todo;



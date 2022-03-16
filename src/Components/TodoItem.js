import React from "react";

function Todo ({ item, index, removeItem }) {
    return (
    <div className="todo">
        {item.text}
        <div>
            <button onClick={() => removeItem(index)}>X</button>
        </div>
    </div>
    );
};

export default Todo;



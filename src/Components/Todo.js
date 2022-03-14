import React from "react";

function Todo ({ item }) {
    return (
    <div className="todo">
        {item.text}
    </div>
    );
};

export default Todo;



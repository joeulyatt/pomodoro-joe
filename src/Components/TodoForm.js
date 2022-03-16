import React, {useState} from "react";

function TodoForm ({ addItem }) {
    const [val, setVal] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!val) return;
        addItem(val);
        setVal("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={val}
                onChange={e => setVal(e.target.value)}
            />
        </form>
    );
}

export default TodoForm;
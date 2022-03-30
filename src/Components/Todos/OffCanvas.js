import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/OffCanvas';
import TodoList from './TodoList';

const MyOffCanvas = () => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

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
        <div className="myOffCanvas">
            <Button onClick={toggleShow} className="me-2">Set Some Tasks</Button>
            <Offcanvas show={show} onHide={handleClose} scroll="true" /*backdrop="false"*/>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Set Your Tasks Here</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <TodoList
                        todos={todos}
                        addItem={addItem}
                        completeItem={completeItem}
                        removeItem={removeItem}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MyOffCanvas;
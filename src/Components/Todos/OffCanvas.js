import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/OffCanvas';
import TodoList from './TodoList';

const MyOffCanvas = () => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <div className="myOffCanvas">
            <Button onClick={toggleShow} className="me-2">Set Some Tasks</Button>
            <Offcanvas show={show} onHide={handleClose} scroll="true" /*backdrop="false"*/>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Set Your Tasks Here</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <TodoList/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MyOffCanvas;
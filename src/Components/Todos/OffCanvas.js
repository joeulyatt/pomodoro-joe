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
            <Offcanvas show={show} onHide={handleClose}>
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

const SideBar = () => {
        const options = [
            {
                name: 'Disable backdrop',
                scroll: true,
                backdrop: false,
            }
        ];

        return (
            <>
                {options.map((props, idx) => (
                <MyOffCanvas key={idx} />
                ))}
            </>
        );
};

export default SideBar;
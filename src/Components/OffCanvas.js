import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/OffCanvas'
import TodoList from './TodoList';

const options = [
        {
            name: 'Disable backdrop',
            scroll: true,
            backdrop: false,
        }
    ];
  
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <div className="myOffCanvas">
            <Button onClick={toggleShow} className="me-2">
                Set Some Tasks
            </Button>
            
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Set Your Tasks Here</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                <TodoList/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
  }
  
  function SideBar() {
        return (
        <div>
            {options.map((props, idx) => (
            <OffCanvasExample key={idx} {...props} />
            ))}
        </div>
        );
    }
  
export default SideBar;
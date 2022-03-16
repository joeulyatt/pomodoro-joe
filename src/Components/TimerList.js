import React, { useState } from 'react';
import Timer from './Timer';

function TimerList() {
    const [isActive, setisActive] = useState(false);
    
    const startPomodoro = 25
    
    function toggle() {
        setisActive(!isActive);
    }


    return ( 
        <div>
            <Timer startPomodoro = {startPomodoro} isActive={isActive}/>

            <div className="row">
                <button 
                    className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
                    onClick={toggle}
                >
                        {isActive ? 'Pause' : 'Start'}
                </button>
            </div>
        </div>
    );
}

export default TimerList;
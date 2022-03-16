import React, { useState } from 'react';
import Timer from './Timer';

function TimerList( ) {
    const [isActive, setisActive] = useState(false);
    
    
    function startPomodoro() {
        setisActive(!isActive);
        return 25
    }

    function startBreak() {
        setisActive(!isActive);
    }

    function startTimer() {

    }


    return ( 
        <div>
            <Timer startPomodoro = {() => startPomodoro} startBreak= {startBreak} isActive={isActive}/>

            <div className="row">
                <button 
                    className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
                    onClick={startPomodoro}
                >
                        {isActive ? 'Pause' : 'Start Pomodoro'}
                </button>
            
                <button 
                    className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
                    onClick={startBreak}
                >
                        'Break'
                </button>
            </div>
            {/* <TypeSelect
                types={types}
                selected={selectedType}
                changeType={changeType}
            />
            <Controls
                start={startTimer}
            /> */}


        </div>
    );
}

export default TimerList;
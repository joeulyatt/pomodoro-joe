import React, { useState } from 'react';
import Timer from './Timer';
import TypeSelect from './TypeSelect';

function Pomodoro (  ) {
    const [timerType, setTimerType] = useState({
        selectedType: 'Pomodoro',
        mins: 25,
        isRunning: false
    });

    const types = [
        {name: 'Pomodoro', mins: 25},
        {name: 'Short Break', mins: 5},
        {name: 'Long Break', mins: 15},
    ];


    const changeType = type => {
        setTimerType({
            selectedType: type.name,
            mins: type.mins,
            isRunning: false
        });
    };

    const startTime = () => {
        setTimerType({
            isRunning: true,
            mins: timerType.mins
        });
    };

    const pauseTime = () => {
        setTimerType({
            isRunning: timerType ? !timerType : null,
            mins: timerType.mins
        });
    };

    const resetTime = () => {
        setTimerType({
            isRunning: !timerType.isRunning,
            mins: timerType.mins
        });
    };



    return ( 
        <div>
            <Timer
                time={timerType.mins}
                isRunning={timerType.isRunning}
                startTime={startTime}
                resetTime={resetTime}
                pauseTime={pauseTime}
                type={timerType.selectedType}
            />
            <TypeSelect
                types={types}
                selected={timerType.selectedType}
                changeType={changeType}
            />
        </div>
    );
}

export default Pomodoro;
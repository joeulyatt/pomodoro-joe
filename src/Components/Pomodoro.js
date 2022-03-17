import React, { useState } from 'react';
import Timer from './Timer';
import TypeSelect from './TypeSelect';
import pomodoroGif from './Gifs/pomodoro.gif'
import shortBreakGif from './Gifs/short-break.gif'
import longBreakGif from './Gifs/long-break.gif'

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
            isRunning: timerType ? !timerType : null,
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
            {timerType.mins === 25 ? <img src={pomodoroGif} alt="anime cat typing on keyboard"/> : null}
            {timerType.mins === 5 ? <img src={shortBreakGif} alt="anime girl sleeping on desk"/> : null}
            {timerType.mins === 15 ? <img src={longBreakGif} alt="anime guy and anime cat eating"/> : null}
        </div>
    );
}

export default Pomodoro;
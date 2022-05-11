import React, { useState } from 'react';
import Timer from './Timer';
import TypeSelect from './TypeSelect';
import TodoSideBar from './Todos/TodoSideBar';
import pomodoroGif from './Gifs/pomodoro.gif';
import shortBreakGif from './Gifs/short-break.gif';
import longBreakGif from './Gifs/long-break.gif';
import logo from '../img/logo.png';

const Pomodoro = () => {
    const [timerType, setTimerType] = useState({
        selectedType: 'Pomodoro',
        mins: 25,
        isRunning: false
    });

    const types = [
        {name: 'Pomodoro', mins: 25, value: '1'},
        {name: 'Short Break', mins: 5, value: '2'},
        {name: 'Long Break', mins: 15, value: '3'}
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
        <div className="pomodoro">
            <img src={logo} className="myLogo" alt="Logo"/>
            <TypeSelect
                types={types}
                selected={timerType.selectedType}
                changeType={changeType}
            />
            <div className="gifs">
                {timerType.mins === 25 ? <img src={pomodoroGif} height="380px" alt="anime cat typing on keyboard"/> : null}
                {timerType.mins === 5 ? <img src={shortBreakGif} height="380px" alt="anime girl sleeping on desk"/> : null}
                {timerType.mins === 15 ? <img src={longBreakGif} height="380px" alt="anime guy and anime cat eating"/> : null}
            </div>
            <TodoSideBar/>
            <Timer
                time={timerType.mins}
                isRunning={timerType.isRunning}
                startTime={startTime}
                resetTime={resetTime}
                pauseTime={pauseTime}
                type={timerType.selectedType}
            />
        </div>
    );
};

export default Pomodoro;
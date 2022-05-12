import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaPause, FaPlay } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

const Timer = ({time, isRunning, startTime, pauseTime, resetTime, type}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(time);

    const printTime = `${minutes}:${seconds <=10 ? ("0"+seconds) : seconds}`;
    document.title = printTime + " Pomodoro Joe";
    
    const start = () => {
        startTime()
    };

    const reset = () => {
        resetTime()
        setMinutes(time)
        setSeconds(0)
    };

    // Resets Time when timer type is selected 
    useEffect(() => {
        setMinutes(time)
        setSeconds(0)
    }, [time, type]);

    // Starts timer, auto-selects break when Pomodoro is over
    useEffect(() => {
        if (isRunning) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {setSeconds(seconds - 1)};
                if (seconds === 0) {
                    if (minutes === 0) {
                        setMinutes(5);
                        clearInterval(myInterval);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                };
            }, 1000);
            return () => {
                clearInterval(myInterval);
            };
        } else if (!isRunning) {return};
    }, [isRunning, time, seconds, minutes]);
    
    return (
        <div className="timer">
            <div className= "controls">
            <div className="time">{printTime}</div>
                <Button 
                    onClick={!isRunning ? start : pauseTime}
                    className={!isRunning ? "paused" : "play"}
                >
                    {!isRunning ? <FaPlay />  : <FaPause/>}
                </Button>
                <Button 
                    className="reset-icon"
                    onClick={reset}><GrPowerReset/>
                </Button>
            </div>
        </div>
    );
};

export default Timer;
import React, { useState, useEffect } from 'react';

function Timer ({time, isRunning, startTime, pauseTime, resetTime, type}) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(time);


    const start = () => {
        startTime()
    }

    const reset = () => {
        resetTime()
        setMinutes(time)
        setSeconds(0)
    }

    // Resets Time when timer type is selected 
    useEffect(() => {
        setMinutes(time)
        setSeconds(0)
    }, [time, type])


    useEffect(() => {
        if (isRunning) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        setMinutes(5)
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        } else if (!isRunning) {
            return
        }
    }, [isRunning, time, seconds, minutes]);
    

    return (
        <div>
            <div className="time">
                {minutes}m
                {seconds}s
            </div>
        <div>
            <button onClick={!isRunning ? start : pauseTime}>START</button>
            <button onClick={pauseTime}>PAUSE</button>
            <button onClick={reset}>RESET</button>
        </div>
        </div>
    )
}

export default Timer;
import React, { useState, useEffect } from 'react';

function Timer ({time, isRunning, startTime}) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(time);


    const setter = () => {
        startTime()
        setMinutes(time)
    }

    // Updates Time Display & Resets Seconds
    useEffect(() => {
        setMinutes(time)
        setSeconds(0)
    }, [time])

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
        }
    }, [isRunning, time, seconds, minutes]);
    

    return (
        <div>
            <div className="time">
                {minutes}m
                {seconds}s
            </div>
        <div>
            <button onClick={setter}>START</button>
        </div>
        </div>
    )
}

export default Timer;
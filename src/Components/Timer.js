import React, { useState, useEffect } from 'react';


function Timer ({startPomodoro, isActive}) {
    // const {initialMinute = 25, initialSeconds = 0} = startPomodoro
    let initialMinute = startPomodoro
    let initialSeconds = 0
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(startPomodoro);

    // function toggle() {
    //     setisActive(!isActive);
    // }

    useEffect(() => {
        if (isActive) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
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
    });
    

    return (
        <div>
            <div className="time">
                {minutes}m
                {seconds}s
            </div>

        </div>
    )
}

export default Timer;


// function Timer({ startPomodoro }) {
//     const {initialMinute = 25, initialSeconds = 0} = startPomodoro
//     const [ minutes, setMinutes ] = useState(initialMinute);
//     const [ seconds, setSeconds ] = useState(initialSeconds);
    

//         useEffect(() => {
//             let myInterval = setInterval(() => {
//                 if (seconds > 0) {
//                     setSeconds(seconds - 1);
//                 }
//                 if (seconds === 0) {
//                     if (minutes === 0) {
//                         clearInterval(myInterval)
//                     } else {
//                         setMinutes(minutes - 1);
//                         setSeconds(59);
//                     }
//                 }
//             }, 1000)
//             return () => {
//                 clearInterval(myInterval);
//             };
//         });

//     return (
//         <div>
//             {/* <button onClick={StartTimer}>Start Timer</button> */}
//             {minutes === 0 && seconds === 0
//                 ? null
//                 : <h1> {minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
//             }
//         </div>
//     );
// }


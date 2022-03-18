import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'

function TypeSelect({ types, changeType }) {
    const [radioValue, setRadioValue] = useState('1');

    return (
        <div className ="container selectType">
            {types.map((type, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx > 0 ? 'outline-danger' : 'outline-success'}
                    name="radio"
                    value={idx+1}
                    checked={radioValue === type.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={() => changeType(type)}
                >
                    {type.name}
                </ToggleButton>
            ))}
        </div>
    );
}

export default TypeSelect;



// const TypeSelect = ({ types, changeType}) => (
//     <div className="TypeSelect">
//         {types.map((type, index) => (
//             <button
//                 key={type.name}
//                 onClick={() => changeType(type)}
//             >
//             {type.name}
//             </button>
//         ))}
//     </div>
// );
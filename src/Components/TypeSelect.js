import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

const TypeSelect = ({ types, changeType }) => {
    const [radioValue, setRadioValue] = useState('1');

    // Maps over Types array in ./Pomodoro and mounts radio buttons
    return (
        <div className="container selectType">
            {types.map((type, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx > 0 ? 'outline-danger' : 'outline-success'}
                    name="radio"
                    value={idx + 1}
                    checked={radioValue === type.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={() => changeType(type)}
                >
                    {type.name}
                </ToggleButton>
            ))}
        </div>
    );
};

export default TypeSelect;

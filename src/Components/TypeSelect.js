import React from 'react';

const TypeSelect = ({ types, changeType}) => (
    <div className="TypeSelect">
        {types.map((type, index) => (
            <button
                key={type.name}
                onClick={() => changeType(type)}
            >
            {type.name}
            </button>
        ))}
    </div>
);

export default TypeSelect;
import React, {useState} from "react";

function IncrementButton({ head = '', initialValue, tail = '', multiplier = 1}) {
    const [value, setValue] = useState(initialValue);

    return (
        <button onClick={() => setValue(current => current + multiplier)}>
            {`${head}${value}${tail}`}</button>
    )
}

export default IncrementButton;

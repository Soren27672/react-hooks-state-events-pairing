import React from "react";

function Toggle({ boolean, setter, trueText, falseText }) {

    return (
        <button onClick={() => setter(current => !current)}>{boolean ? trueText : falseText}</button>
    )
}

export default Toggle;

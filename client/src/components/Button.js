import React from "react";

function Button(props) {
    return <button onClick={props.fcn}> {props.label}</button>
}

export default Button;
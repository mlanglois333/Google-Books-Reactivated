import React from "react";

function Button(props) {
    return <button onClick={props.fcn} id={props.val}>{props.label}</button>
}

export default Button;
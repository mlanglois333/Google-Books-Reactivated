import React from "react";

function OptionsForm(props) {
    return (
        <div>
            <h3>Search By Title</h3>
            <br></br>
            <form onSubmit={props.onClick}>
                

                <input type="text" id="searchVal"></input>

                <button type="submit" >Submit</button>
            </form>


        </div>
    );
}

export default OptionsForm;
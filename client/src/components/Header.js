import React from "react";

function Header(props) {

    return (<div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" onClick={props.search}>Google Books Reactivated</a>
            
            <div id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.search}>Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.view}>View</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>)

}

export default Header;
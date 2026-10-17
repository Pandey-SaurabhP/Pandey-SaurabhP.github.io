import React from "react";
import './headingbar.css';

function HeadingBar(props) {
    return (
        <>
            <h2 className="text-box">{props.text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())}</h2>
        </>
    );
}

export default HeadingBar;

import React from "react";
import './headingbar.css';

function HeadingBar(props) {
    return (
        <>
            <div className="text-box">{props.text}</div>
        </>
    );
}

export default HeadingBar;

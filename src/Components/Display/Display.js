import React from 'react';
import './Display.css';

const Display = (props) => {
    return(
        <div className="Display">
            <div>{props.disp}</div>
        </div>
    );
}

export default Display;
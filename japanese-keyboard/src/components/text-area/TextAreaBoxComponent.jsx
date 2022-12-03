import React from "react";
import '../../App.css';

const TextAreaBox = (props ) => {
    
    function handleKeyPress(e) {
        if(e.keyCode === 8 || e.keyCode === 46){
            props.onDeletePressed();
        }
    }
    
    return (
        <textarea className="result_text" value={props.value} onKeyDown={e => handleKeyPress(e)} ></textarea>
    );
}

export default TextAreaBox;

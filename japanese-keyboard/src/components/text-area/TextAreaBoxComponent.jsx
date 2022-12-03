import React from "react";
import '../../App.css';

const TextAreaBox = (props ) => {
    
    function handleKeyPress(e) {
        console.log('handleKeyPress', e.keyCode);
        if(e.keyCode === 8 || e.keyCode === 46){
            console.log('handleKeyPress IF ', e.keyCode);
            props.onDeletePressed();
        }
    }
    
    return (
        <textarea className="result_text" value={props.value} onKeyDown={e => handleKeyPress(e)} ></textarea>
    );
}

export default TextAreaBox;

import React from "react";
import '../App.css';

 function TextAreaBox(props) {
    return (
        <textarea className="result_text" value={props.value}></textarea>
    );
}

export default TextAreaBox;
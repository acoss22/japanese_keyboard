import React, { useState } from "react";
import '../App.css';

 function TextBox(...props) {
    const [message, setMessage] = useState(props.value);
    return (
        <textarea className="result_text">{message}</textarea>
    );
}

export default TextBox;
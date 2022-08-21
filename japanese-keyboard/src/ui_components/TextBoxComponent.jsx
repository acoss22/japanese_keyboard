import React, { useState } from "react";

 function TextBox(props) {
    const [message, setMessage] = useState(props.value);

    return (
        <input type="text" value={message} />
    );
}


export default TextBox;
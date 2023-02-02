import React from "react";
import styles from './textarea.module.scss';

const TextAreaBox = (props ) => {

    const {classname} = props;
    
    function handleKeyPress(e) {
        if(e.keyCode === 8 || e.keyCode === 46){
            props.onDeletePressed();
        }
    }
    
    return (
        <textarea className={styles.container} value={props.value} onKeyDown={e => handleKeyPress(e)} ></textarea>
    );
}

export default TextAreaBox;

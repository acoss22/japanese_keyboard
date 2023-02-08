import React from "react";
import Toggle from 'react-toggle'
import styles from './toggleButton.module.css';

 function ToggleButton(props) {
    return (
        <label>
          <Toggle className={styles.pull_right}
            defaultChecked={props.value}
            icons={props.showIcons}
            onChange={props.onChange} />
          <span className={styles.pull_right + ' ' + styles.label}>{props.label}</span>
        </label>
    );
}

export default ToggleButton;
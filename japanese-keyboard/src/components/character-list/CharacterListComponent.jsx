import React, { useState } from "react";
import CharacterSymbolComponent from '../character-symbol/CharacterSymbolComponent';
import styles from './characterlist.module.css';

function CharacterList(props) {
    const list = props.characters;
    const rows = props.rows;
    const columns = Math.ceil(list.length / rows);
    
    return (
        <div className={styles.center}>
            {(() => {
                let renderRows = [];
                for (let i = 0; i < rows; i++) {
                    let children = [];
                    for(let j = 0; j< columns; j++) {
                        let pos = (columns * i) + j;
                        if(list[pos] !== undefined)
                            children.push(<CharacterSymbolComponent key={list[pos].symbol} char={list[pos]} handleChange={props.handleChange}/>);
                    }
                    let renderRow = React.createElement("div", {className: styles.rows, key: 'a' + i}, children);
                    renderRows.push(renderRow);
                }
                
                return renderRows;
            })()}

        </div>
    );
}

export default CharacterList;
import styles from './characterSymbol.module.css';

function CharacterSymbolComponent(props){
    return (
        <button className={styles.pile} onClick={() => {props.handleChange(props.char.symbol)}}>
            <span>
            {props.char.symbol}
            </span>
            <span>
            {props.char.romanji}
            </span>
        </button>
    );
}

export default CharacterSymbolComponent;
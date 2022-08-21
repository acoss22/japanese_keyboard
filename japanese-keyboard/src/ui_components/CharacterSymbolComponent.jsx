
function CharacterSymbolComponent(props){
    return (
        <button onClick={() => {props.handleChange(props.char.symbol)}}>
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
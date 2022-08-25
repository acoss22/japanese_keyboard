import styles from './kanjiSuggestion.module.css';

function KanjiSuggestion(props) {

    return (
        <div className={styles.container}>
            <div>
                <span>Your word:</span>
            </div>
            <div>
                <button onClick={()=> props.selectedWord(props.word)}>
                    {props.word}
                </button>
            </div>
            <div className={styles.kanji}>
                <div>
                    <span>Suggestions:</span>
                </div>
                <button onClick={()=> props.selectedWord('asdfsfasf')}>
                    asdfsfasf
                </button>
            </div>
        </div>
    );
}

export default KanjiSuggestion;

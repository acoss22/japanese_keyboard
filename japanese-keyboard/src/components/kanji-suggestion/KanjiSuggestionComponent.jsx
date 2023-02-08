import styles from './kanjiSuggestion.module.css';
import { getKanjiSuggestionsFromHiragana } from '../../utils/suggestionsEngine';

function KanjiSuggestion(props) {
    const suggestions = getKanjiSuggestionsFromHiragana(props.word);

    const handleCancel = (e) => {
        props.cancelHandler();
    }

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.label}>Your word:</span>
            </div>
            <div>
                <button onClick={() => props.selectedWordHandler(props.word)}>
                    {props.word}
                </button>
            </div>
            <div className={styles.kanji}>
                <div>
                    <span className={styles.label}>Suggestions:</span>
                </div>
                {suggestions.map(function (item, i) {
                    return <button key={item.kanji} onClick={() => props.selectedWordHandler(item.Kanji)}>
                        <>
                            {item.Kanji}
                            <div>
                                {item.Meanings.map(function (meaning, k) {
                                    return meaning + " ";
                                })}
                            </div>
                        </>
                    </button>;
                })}
            </div>
            <div>
                <button className={styles.cancel} onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default KanjiSuggestion;

import styles from './kanjiSuggestion.module.css';
import {getKanjiSuggestionsFromHiragana} from '../utils/suggestionsEngine';

function KanjiSuggestion(props) {
    const suggestions = getKanjiSuggestionsFromHiragana(props.word);
    
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
                {suggestions.map(function(item, i) {
                    return <button key={item.kanji} onClick={()=> props.selectedWord(item.Kanji)}>
                                <>
                                    {item.Kanji}
                                    <div>
                                        {item.Meanings.map(function(meaning, k){
                                            return meaning + " ";
                                        })}
                                    </div>
                                </>
                    </button>;
                })}
            </div>
        </div>
    );
}

export default KanjiSuggestion;

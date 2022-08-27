import kanjis from '../consts/kanjis';

export function getKanjiSuggestions(hiraganaWord){
    let suggestions = [];
    kanjis.forEach((item, i) => {
        if(item.ReadingHiragana.includes(hiraganaWord)){
            suggestions.push(item);
        }
    });

    return suggestions;
}

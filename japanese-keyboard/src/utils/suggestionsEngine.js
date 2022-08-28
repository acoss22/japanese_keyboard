import kanjis from '../consts/kanjis';

export function getKanjiSuggestionsFromHiragana(hiraganaWord){
    let suggestions = [];
    kanjis.forEach((item, i) => {
        if(item.ReadingHiragana.includes(hiraganaWord)){
            suggestions.push(item);
        }
    });

    return suggestions;
}


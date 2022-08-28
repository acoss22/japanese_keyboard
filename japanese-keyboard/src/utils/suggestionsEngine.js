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

export function getKanjiSuggestionsFromEnglish(englishWord){
    let suggestions = [];
    kanjis.forEach((item, i) => {
        if(item.Meanings.includes(englishWord)){
            suggestions.push(item);
        }
    });

    return suggestions;
}
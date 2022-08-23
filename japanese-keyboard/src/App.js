import TextBox from "./ui_components/TextBoxComponent";
import CharacterList from "./ui_components/CharacterListComponent";
import React, { useState } from "react";
import KanjiSuggestion from './ui_components/KanjiSuggestionComponent';

function App() {
    const [newWord, setNewWord] = useState('');
    const [phrase, setPhrase] = useState('');

    function handleChange(event) {
        setNewWord(newWord + event);
    }

    function selectedWord(word) {
        setPhrase(phrase + word);
        setNewWord('');
    }

    const hiraganas = [{
        symbol: "あ",
        romanji: "a",
    },
    {
        symbol: "い",
        romanji: "i",
    },
    {
        symbol: "う",
        romanji: "u",
    },
    {
        symbol: "え",
        romanji: "e",
    },
    {
        symbol: "お",
        romanji: "o",
    },
    {
        symbol: "か",
        romanji: "ka",
    },
    {
        symbol: "き",
        romanji: "ki",
    },
    {
        symbol: "く",
        romanji: "ku",
    },
    {
        symbol: "け",
        romanji: "ke",
    },
    {
        symbol: "こ",
        romanji: "ko",
    },
    {
        symbol: "きゃ",
        romanji: "kya",
    },
    {
        symbol: "きゅ",
        romanji: "kyu",
    },
    {
        symbol: "きょ",
        romanji: "kyo",
    },
    {
        symbol: "さ",
        romanji: "sa",
    },
    {
        symbol: "し",
        romanji: "shi",
    },
    {
        symbol: "す",
        romanji: "su",
    },
    {
        symbol: "せ",
        romanji: "se",
    },
    {
        symbol: "そ",
        romanji: "so",
    },
    {
        symbol: "しゃ",
        romanji: "sha",
    },

    {
        symbol: "しゅ",
        romanji: "shu",
    },
    {
        symbol: "しょ",
        romanji: "sho",
    },
    {
        symbol: "た",
        romanji: "ta",
    },
    {
        symbol: "ち",
        romanji: "chi",
    },
    {
        symbol: "つ",
        romanji: "tsu",
    },
    {
        symbol: "て",
        romanji: "te",
    },
    {
        symbol: "と",
        romanji: "to",
    },
    {
        symbol: "ちゃ",
        romanji: "cha",
    },
    {
        symbol: "ちゅ",
        romanji: "chu",
    },
    {
        symbol: "ちょ",
        romanji: "cho",
    },
    {
        symbol: "な",
        romanji: "na",
    },
    {
        symbol: "に",
        romanji: "ni",
    },
    {
        symbol: "ぬ",
        romanji: "nu",
    },
    {
        symbol: "ね",
        romanji: "ne",
    },
    {
        symbol: "の",
        romanji: "no",
    },
    {
        symbol: "にゃ",
        romanji: "nya",
    },
    {
        symbol: "にゅ",
        romanji: "nyu",
    },
    {
        symbol: "にょ",
        romanji: "nyo",
    },
    {
        symbol: "は",
        romanji: "ha",
    },
    {
        symbol: "ふ",
        romanji: "fu",
    },
    {
        symbol: "へ",
        romanji: "he",
    },
    {
        symbol: "ほ",
        romanji: "ho",
    },
    {
        symbol: "ひゃ",
        romanji: "hya ",
    },
    {
        symbol: "ひゅ",
        romanji: "hyu",
    },
    {
        symbol: "ひょ",
        romanji: "hyo",
    },
    {
        symbol: "ま",
        romanji: "ma",
    },
    {
        symbol: "み",
        romanji: "mi",
    },
    {
        symbol: "む",
        romanji: "mu",
    },
    {
        symbol: "め",
        romanji: "me",
    },
    {
        symbol: "も",
        romanji: "mo",
    },
    {
        symbol: "みゃ",
        romanji: "mya",
    },
    {
        symbol: "みゅ",
        romanji: "myu",
    },
    {
        symbol: "みょ",
        romanji: "myo",
    },
    {
        symbol: "や",
        romanji: "ya",
    },
    {
        symbol: "ゆ",
        romanji: "yu",
    },
    {
        symbol: "よ",
        romanji: "yo",
    },
    {
        symbol: "ら",
        romanji: "ra",
    },
    {
        symbol: "り",
        romanji: "ri",
    },
    {
        symbol: "る",
        romanji: "ru",
    },
    {
        symbol: "れ",
        romanji: "re",
    },
    {
        symbol: "ろ",
        romanji: "ro",
    },
    {
        symbol: "りゃ",
        romanji: "rya",
    },
    {
        symbol: "りゅ",
        romanji: "ryu",
    },
    {
        symbol: "りょ",
        romanji: "ryo",
    },
    {
        symbol: "わ",
        romanji: "wa",
    },
    {
        symbol: "ゐ",
        romanji: "wi",
    },
    {
        symbol: "ゑ",
        romanji: "we",
    },
    {
        symbol: "を",
        romanji: "wo",
    },
    {
        symbol: "が",
        romanji: "ga",
    },
    {
        symbol: "ぎ",
        romanji: "gi",
    },
    {
        symbol: "ぐ",
        romanji: "gu",
    },
    {
        symbol: "げ",
        romanji: "ge",
    },
    {
        symbol: "ご",
        romanji: "go",
    },
    {
        symbol: "ぎゃ",
        romanji: "gya",
    },
    {
        symbol: "ぎゅ",
        romanji: "gyu",
    },
    {
        symbol: "ぎょ",
        romanji: "gyo",
    },
    {
        symbol: "ざ",
        romanji: "za",
    },
    {
        symbol: "じ",
        romanji: "ji",
    },
    {
        symbol: "ず",
        romanji: "zu",
    },
    {
        symbol: "ぜ",
        romanji: "ze",
    },
    {
        symbol: "ぞ",
        romanji: "zo ",
    },
    {
        symbol: "じゃ",
        romanji: "ja",
    },
    {
        symbol: "じゅ",
        romanji: "ju",
    },
    {
        symbol: "じょ",
        romanji: "jo",
    },
    {
        symbol: "だ",
        romanji: "da",
    },
    {
        symbol: "ぢ",
        romanji: "ji",
    },
    {
        symbol: "づ",
        romanji: "zu",
    },
    {
        symbol: "で",
        romanji: "de",
    },
    {
        symbol: "ど",
        romanji: "do",
    },
    {
        symbol: "ぢゃ",
        romanji: "ja",
    },
    {
        symbol: "ぢゅ",
        romanji: "ju",
    },
    {
        symbol: "ぢょ",
        romanji: "jo",
    },
    {
        symbol: "ば",
        romanji: "ba",
    },
    {
        symbol: "び",
        romanji: "bi",
    },
    {
        symbol: "ぶ",
        romanji: "bu",
    },
    {
        symbol: "べ",
        romanji: "be",
    },
    {
        symbol: "ぼ",
        romanji: "bo",
    },
    {
        symbol: "びゃ",
        romanji: "bya",
    },
    {
        symbol: "びゅ",
        romanji: "byu",
    },
    {
        symbol: "びょ",
        romanji: "byo",
    },
    {
        symbol: "ぱ",
        romanji: "pa",
    },
    {
        symbol: "ぴ",
        romanji: "pi",
    },
    {
        symbol: "ぷ",
        romanji: "pu",
    },
    {
        symbol: "ぺ",
        romanji: "pe",
    },
    {
        symbol: "ぽ",
        romanji: "po",
    },
    {
        symbol: "ぴゃ",
        romanji: "pya",
    },
    {
        symbol: "ぴゅ",
        romanji: "pyu",
    },
    {
        symbol: "ぴょ",
        romanji: "pyo",
    },
    {
        symbol: "ん",
        romanji: "n",
    }
    ];

    return (
        <div>
          <TextBox key={phrase} value={phrase} />
          {(newWord !== '') ? (
            <KanjiSuggestion word={newWord} selectedWord = {selectedWord}/>
          ): (<></>)}
        
          <CharacterList characters={hiraganas} rows={7} handleChange={handleChange} />
        </div>
    
                );
}

export default App;

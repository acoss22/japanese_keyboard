import TextBox from "./ui_components/TextBoxComponent";
import CharacterList from "./ui_components/CharacterListComponent";
import React, { useState } from "react";
import KanjiSuggestion from './ui_components/KanjiSuggestionComponent';
import {hiraganas} from './hiraganaList';

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

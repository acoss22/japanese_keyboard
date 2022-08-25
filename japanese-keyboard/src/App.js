import TextBox from "./components/TextBoxComponent";
import CharacterList from "./components/CharacterListComponent";
import React, { useState } from "react";
import KanjiSuggestion from './components/KanjiSuggestionComponent';
import {hiraganas} from './consts/hiraganaList';
import './App.css';

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
        <div className="container">
          <TextBox key={phrase} value={phrase} />
          {(newWord !== '') ? (
            <KanjiSuggestion data-testid="app-kanji-suggestion" word={newWord} selectedWord = {selectedWord}/>
          ): (<></>)}
        
          <CharacterList data-testid="app-hiragana-list" characters={hiraganas} rows={7} handleChange={handleChange} />
        </div>
    
    );
}

export default App;

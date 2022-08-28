import TextBox from "./components/TextBoxComponent";
import CharacterList from "./components/CharacterListComponent";
import React, { useState } from "react";
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import KanjiSuggestion from './components/KanjiSuggestionComponent';
import {hiraganas} from './consts/hiraganaList';
import './App.css';

function App() {
    const [newWord, setNewWord] = useState('');
    const [phrase, setPhrase] = useState('');
    const [useKeyboard, setUseKeyboard] = useState(false);

    function handleChange(event) {
        setNewWord(newWord + event);
    }

    function selectedWord(word) {
        setPhrase(phrase + word);
        setNewWord('');
    }

    function handleToggleKeyboard(){
      setUseKeyboard(!useKeyboard);
    }


    return (
        <div className="container">
          <TextBox key={phrase} value={phrase} />
          {(newWord !== '') ? (
            <KanjiSuggestion data-testid="app-kanji-suggestion" word={newWord} selectedWord = {selectedWord}/>
          ): (<></>)}
          <label>
            <Toggle
              defaultChecked={useKeyboard}
              icons={false}
              onChange={handleToggleKeyboard} />
            <span>Show keyboard</span>
          </label>
          {useKeyboard ? (
            <div>Keyboard should show here. To be implemented</div>
            ) : (
              <CharacterList data-testid="app-hiragana-list" characters={hiraganas} rows={7} handleChange={handleChange} />
            ) 
          }
        </div>
    
    );
}

export default App;

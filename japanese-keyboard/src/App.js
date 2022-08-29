import TextBox from "./components/TextBoxComponent";
import CharacterList from "./components/CharacterListComponent";
import React, { useState } from "react";
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import KanjiSuggestion from './components/KanjiSuggestionComponent';
import {hiraganas} from './consts/hiraganaList';
import Header from './components/HeaderComponent';
import './App.css';

function App() {
    const [newWord, setNewWord] = useState('');
    const [phrase, setPhrase] = useState('');
    const [useKeyboard, setUseKeyboard] = useState(false);

    function handleChange(event) {
        setNewWord(newWord + event);
    }

    function selectedWord(word) {
        console.log('selected word', word);
        setPhrase(phrase + word);
        setNewWord('');
    }

    function handleToggleKeyboard(){
      setUseKeyboard(!useKeyboard);
    }


    return (
      <>
        <Header />
        <div className="container">
          <div>
            <TextBox className="result_text" key={phrase} value={phrase} />
            {(newWord !== '') ? (
              <KanjiSuggestion data-testid="app-kanji-suggestion" word={newWord} selectedWord={selectedWord}/>
              ): (<></>)}
          </div>
          <div className="toggle_div">
            <label>
              <Toggle className="pull_right"
                defaultChecked={useKeyboard}
                icons={false}
                onChange={handleToggleKeyboard} />
              <span className="pull_right">Show keyboard</span>
            </label>
          </div>
          <div>
            {useKeyboard ? (
              <div>Keyboard should show here. To be implemented</div>
              ) : (
                <CharacterList data-testid="app-hiragana-list" characters={hiraganas} rows={6} handleChange={handleChange} />
                ) 
            }
          </div>
        </div>
      </>
    
    );
}

export default App;


import React, { useState } from "react";
import "react-toggle/style.css"
import {hiraganas} from './consts/hiraganaList';
import './App.css';
import Header from './components/header/HeaderComponent';
import TextAreaBox from './components/text-area/TextAreaBoxComponent';
import KanjiSuggestion from './components/kanji-suggestion/KanjiSuggestionComponent';
import GenericTutorial  from './components/generic-tutorial/GenericTutorialComponent';
import ToggleButton from './components/toogle-button/ToggleButtonComponent';
import CharacterList from './components/character-list/CharacterListComponent';
import KeyboardComponent from "./components/keyboard/KeyboardComponent";

function App() {
    const [newWord, setNewWord] = useState('');
    const [phrase, setPhrase] = useState('');
    const [useKeyboard, setUseKeyboard] = useState(false);

    function handleChange(event) {
        setNewWord(newWord + event);
    }

    function handleSelectedWord(word) {
        setPhrase(phrase + word);
        setNewWord('');
    }

    function handleToggleKeyboard(){
      setUseKeyboard(!useKeyboard);
    }

    function handleCancelSuggestion(){
      setNewWord('');
    }

    return (
      <>
        <Header />
        <div className="container">
          <div>
            <TextAreaBox value={phrase} />
            {(newWord !== '') ? (
              <KanjiSuggestion data-testid="app-kanji-suggestion" word={newWord} selectedWordHandler={handleSelectedWord} cancelHandler={handleCancelSuggestion}/>
              ): (<GenericTutorial text="To begin you have to select any hiragana from the list below. After selecting an hiragana the system will attempt to suggest you the corresponding kanjis. You may then pick the word you were writing in hiragana or the suggested kanji"></GenericTutorial>)}
          </div>
          <div className="toggle_div">
            <ToggleButton label="Show Keyboard" value={useKeyboard} showIcons={false} onChange={handleToggleKeyboard}></ToggleButton>
          </div>
          <div>
            {useKeyboard ? (
              <KeyboardComponent></KeyboardComponent>
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

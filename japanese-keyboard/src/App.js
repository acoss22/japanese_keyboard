import TextAreaBox from "./components/TextAreaBoxComponent";
import CharacterList from "./components/CharacterListComponent";
import React, { useState } from "react";
import "react-toggle/style.css"
import KanjiSuggestion from './components/KanjiSuggestionComponent';
import {hiraganas} from './consts/hiraganaList';
import Header from './components/HeaderComponent';
import './App.css';
import ToggleButton from "./components/ToggleButtonComponent";
import GenericTutorial from "./components/GenericTutorialComponent";

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

    return (
      <>
        <Header />
        <div className="container">
          <div>
            <TextAreaBox value={phrase} />
            {(newWord !== '') ? (
              <KanjiSuggestion data-testid="app-kanji-suggestion" word={newWord} selectedWordHandler={handleSelectedWord}/>
              ): (<GenericTutorial text="To begin you have to select any hiragana from the list below. After selecting an hiragana the system will attempt to suggest you the corresponding kanjis. You may then pick the word you were writing in hiragana or the suggested kanji"></GenericTutorial>)}
          </div>
          <div className="toggle_div">
            <ToggleButton label="Show Keyboard" value={useKeyboard} showIcons={false} onChange={handleToggleKeyboard}></ToggleButton>
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

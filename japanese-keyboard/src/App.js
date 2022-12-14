
import React, { useState } from "react";
import "react-toggle/style.css"
import { hiraganas } from './consts/hiraganaList';
import { katakana } from './consts/katakana';
import './App.css';
import Header from './components/header/HeaderComponent';
import TextAreaBox from './components/text-area/TextAreaBoxComponent';
import KanjiSuggestion from './components/kanji-suggestion/KanjiSuggestionComponent';
import GenericTutorial from './components/generic-tutorial/GenericTutorialComponent';
import ToggleButton from './components/toogle-button/ToggleButtonComponent';
import CharacterList from './components/character-list/CharacterListComponent';


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

  function handleToggleKeyboard() {
    setUseKeyboard(!useKeyboard);
  }

  function handleCancelSuggestion() {
    setNewWord('');
  }

  function handleOnDelete() {
    setPhrase(phrase.slice(0, -1));
  }

  return (
    <>
      <Header />
      <div className="container">
        <div>
          <button className="toggle_div right" onClick={handleOnDelete} >
            DELETE

          </button>
          <TextAreaBox value={phrase} onDeletePressed={handleOnDelete} />
          {(newWord !== '') ? (
            <KanjiSuggestion data-testid="app-kanji-suggestion" word={newWord} selectedWordHandler={handleSelectedWord} cancelHandler={handleCancelSuggestion} />
          ) : (<GenericTutorial text="To begin you have to select any hiragana from the list below. After selecting an hiragana the system will attempt to suggest you the corresponding kanjis. You may then pick the word you were writing in hiragana or the suggested kanji"></GenericTutorial>)}
        </div>
        <div className="toggle_div">
          <ToggleButton label="Show Keyboard" value={useKeyboard} showIcons={false} onChange={handleToggleKeyboard}></ToggleButton>
        </div>
        <div>
          {useKeyboard ? (
            <div>Keyboard should show here. To be implemented</div>
          ) : (
            <>
              <div className="toggle_div label">HIRAGANA</div>

              <CharacterList data-testid="app-hiragana-list" characters={hiraganas} rows={6} handleChange={handleChange} />

              <div className="toggle_div label">KATAKANA</div>
              <CharacterList data-testid="app-kataka-list" characters={katakana} rows={6} handleChange={handleChange} />
            </>
          )
          }
        </div>
      </div>
    </>

  );
}

export default App;

import React, { useState } from "react";
import "react-toggle/style.css";
import { hiraganas } from './consts/hiraganaList';
import { katakana } from './consts/katakana';
import Header from './components/header/HeaderComponent';
import TextAreaBox from './components/text-area/TextAreaBoxComponent';
import KanjiSuggestion from './components/kanji-suggestion/KanjiSuggestionComponent';
import GenericTutorial from './components/generic-tutorial/GenericTutorialComponent';
import ToggleButton from './components/toogle-button/ToggleButtonComponent';
import CharacterList from './components/character-list/CharacterListComponent';
import Footer from './components/footer/FooterComponent';
import styles from './app.module.scss';

function App() {
  const [newWord, setNewWord] = useState('');
  const [phrase, setPhrase] = useState('');
  const [useKeyboard, setUseKeyboard] = useState(true);
  const [isClipboardDisabled, setIsClipboardDisabled] = useState(true);

  function handleChange(event) {
    setNewWord(newWord + event);
    setIsClipboardDisabled(true); // Disable the "Copy to Clipboard" button when the phrase changes
  }

  function handleSelectedWord(word) {
    setPhrase(phrase + word);
    setNewWord('');
    setIsClipboardDisabled(false); // Enable the "Copy to Clipboard" button when the phrase is updated
  }

  function handleToggleKeyboard() {
    setUseKeyboard(!useKeyboard);
  }

  function handleCancelSuggestion() {
    setNewWord('');
  }

  function handleOnDelete() {
    setPhrase(phrase.slice(0, -1));
    setIsClipboardDisabled(phrase.length <= 2); // Disable if there's only one or two characters left
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(phrase);
    setIsClipboardDisabled(true);
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <TextAreaBox classname={styles.area} value={phrase} onDeletePressed={handleOnDelete} />
        <div className="button-group">
          <button className={`${styles.btnDel}`} onClick={handleOnDelete} disabled={phrase === ''} >
            DELETE
          </button>
          <button
            className={`${styles.btnDel}`}
            onClick={handleCopyToClipboard}
            disabled={isClipboardDisabled}
          >
            Copy to Clipboard
          </button>
        </div>
        <div className={styles.kanjiContainer}>
          {newWord !== '' ? (
            <KanjiSuggestion
              data-testid="app-kanji-suggestion"
              word={newWord}
              selectedWordHandler={handleSelectedWord}
              cancelHandler={handleCancelSuggestion}
            />
          ) : (
            <div className={styles.genericTutorialContainer}>
              <div className={styles.step}>1. Select any character or characters from the keyboard.</div>
              <div className={styles.step}>2. Click what you intend to write (kanjis or just a character) from the suggestions.</div>
            </div>
          )}
        </div>
        <div>
          <ToggleButton label="Show Keyboards" className={styles.right} value={useKeyboard} showIcons={false} onChange={handleToggleKeyboard}></ToggleButton>
        </div>
        <div>
          {useKeyboard && (
            <>
              <div className="keyboardTitle">HIRAGANA</div>
              <CharacterList data-testid="app-hiragana-list" characters={hiraganas} rows={6} handleChange={handleChange} />
              <div className="keyboardTitle">KATAKANA</div>
              <CharacterList data-testid="app-kataka-list" characters={katakana} rows={6} handleChange={handleChange} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

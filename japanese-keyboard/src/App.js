import logo from "./logo.svg";
import "./App.css";
import TextBox from "./ui_components/TextBoxComponent";
import CharacterList from "./ui_components/CharacterListComponent";
import React, { useState } from "react";
import KanjiSuggestion from './ui_components/KanjiSuggestionComponent';

function App() {
  const [newWord, setNewWord] = useState('');
  const [phrase, setPhrase] = useState('');

  function handleChange(event){
    setNewWord( newWord + event);
  }

  function selectedWord(word){
    setPhrase( phrase + word);
    setNewWord('');
  }

  const hiraganas = [
    {
      symbol: "1",
      romanji: "a",
    },
    {
      symbol: "2",
      romanji: "b",
    },
    {
      symbol: "3",
      romanji: "c",
    },
    {
      symbol: "4",
      romanji: "d",
    },
    {
      symbol: "5",
      romanji: "e",
    },
    {
      symbol: "6",
      romanji: "f",
    },
    {
      symbol: "7",
      romanji: "g",
    },
    {
      symbol: "8",
      romanji: "h",
    },
    {
      symbol: "9",
      romanji: "i",
    },
  ];

  return (
    <div className="App">
      <TextBox key={phrase} value={phrase} />
      {(newWord !== '') ? (
        <KanjiSuggestion word={newWord} selectedWord = {selectedWord}/>
      ): (<></>)}
    
      <CharacterList characters={hiraganas} rows={2} handleChange={handleChange} />
    </div>
  );
}

export default App;

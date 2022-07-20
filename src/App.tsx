import React from 'react';
import './App.css';
import {characters} from "./character.json";
import CharacterCard from './CharacterCard';



function App() {
  return (
    <div className="App">
      {characters.map(character=> {
        return <CharacterCard char={character}
        ></CharacterCard>
      })
      }
    </div>
  );
}

export default App;

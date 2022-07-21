import React from 'react';
import './App.css';
import {characters} from "./character.json";
import CharacterCard from './CharacterCard';
import './myStyles.css';


function App() {
  return (
    <div className="App">
      {characters.map(character=> {
        return <CharacterCard char={character}
                                      key={character.id}
        ></CharacterCard>
      })
      }
    </div>
  );
}

export default App;

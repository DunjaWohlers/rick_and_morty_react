import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ActionBar from './ActionBar';
import './App.css';
//import {characters} from "./character.json";
import CharacterCard from './CharacterCard';
import './myStyles.css';

type Character = {
    name: string, gender: string,
    image: string, species: string, origin: { name: string, url: string },
    location: { name: string }, episode: string[],
    id: number,
};

function App() {
    const [characters, setCharacter] = useState<Character[]>([])
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => setCharacter(data.results))
            .catch(() => console.log("Achtung Fehler"))

        axios.get("https://rickandmortyapi.com/api/character?page=2")
            .then((response) => {
                return response.data
            })
            .then((data) => setCharacter(characters.concat(data.results)))
            .catch(() => console.log("Achtung Fehler"))
    }, [])
    const [searchTxt, setSearchTxt] = useState<string>("");
    const [selectedGender, setGender] = useState<string>("female");
    const filteredCharacters = characters.filter(e => e.name.toLowerCase()
        .includes(searchTxt.toLowerCase()))
        .filter(e => e.gender.toLowerCase() === selectedGender.toLowerCase()
        );

    //const   [charList, setCharList]   = useState(characters);
    //useEffect(()=>{return ()=>{}})
    return (
        <div className="App">
            <nav>
                <ActionBar setSearchText={setSearchTxt} setGender={setGender}
                />
                {/*   <button onClick={()=>setCharList(characters.filter(e=>e.name.toLowerCase()
              .includes(searchTxt.toLowerCase())))}>MONzTERGroß</button>
          */}
            </nav>
            {searchTxt.length > 0 &&
                <div className="App2">
                    {filteredCharacters.map(character => {
                        return <CharacterCard char={character}
                                              key={character.id}
                        ></CharacterCard>
                    })
                    }
                </div>
            }
        </div>
    );
}

export default App;

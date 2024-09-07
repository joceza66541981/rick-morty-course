
import React, { useState, useEffect } from 'react';
import imageRickMorty from './img/rick-morty.png';
import './App.css';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState([]);

  const reqApi = async () => {
    try {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const characterApi = await api.json();
      setCharacters(characterApi.results || []); // Asegúrate de manejar el caso en que results no esté presente
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    reqApi(); // Llama a reqApi cuando el componente se monte
  }, []); // El array vacío indica que esto solo debe ejecutarse una vez al montar el componente

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters.length > 0 ? (
          <Characters characters={characters}  setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

function Characters({ characters, setCharacters = [] }) {

  const resetCharacters = () => {
        setCharacters([]); // Cambia [null] a [] para restablecer a un array vacío
  
  }
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
      <div className="container-characters">
        {characters.length > 0 ? (
          characters.map(character => (
            <div className="character-container" key={character.id}>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>
                <h3>{character.name}</h3> {/* Mostrar el nombre correctamente */}
                <h6>
                    {character.status === "Alive"? (
                      <>
                      <span className="alive" />
                      Alive
                      </>   
                    ) : (
                      <>
                        <span className="Dead" />
                        Dead
                      </>  
                       
                    )}
                </h6>
                    <p>
                       <span className="text-grey">Episodios:  </span>
                       <span>{character.episode.length}</span>
                    </p>
                    <p>
                       <span className="text-grey">Especie:  </span>
                       <span>{character.species}</span>
                    </p>
                    
              </div>
            </div>
            
          ))
        ) : (
          <p>No hay personajes disponibles.</p>
        )}
      </div>
      <footer className="footer">
        <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
      </footer>
    </div>
    
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      episode: PropTypes.array.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Characters;
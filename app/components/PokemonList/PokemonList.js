import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'


const PokemonList = props => {
  const pokemonArray = props.data.map((pokemon) => {
    return (
      <div className='pokemon-item' key={pokemon.name}>
        <a href='#'>
          <div className='pokemon-image'>
            <img src = {"https://img.pokemondb.net/artwork/" + pokemon.name.toLowerCase() + ".jpg"} alt={pokemon.name} />
          </div>
          <div className='pokemon-content'>
              <h3>{pokemon.name}</h3>
          </div>
        </a>
    </div>
    );
  });
  return (
    <div>
      {pokemonArray}
    </div>
  );
};
PokemonList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PokemonList
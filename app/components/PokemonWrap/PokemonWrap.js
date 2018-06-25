import React from 'react'
import axios from 'axios'
import PokemonList from '../PokemonList'
import './style.scss'

class PokemonWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonsData: [],
      loading: true,
    }
  }
  loadPokemons(url, initialLoad){
    axios.get(url)
      .then(res => {
          if(initialLoad){
            this.setState({pokemonsData: res.data})
          }else{
            const newDataObject = {
              count: res.data.count,
              next: res.data.next,
              previous: res.data.previous,
              results: this.state.pokemonsData.results
            }
            for (let pokemon of  res.data.results) {
              newDataObject.results.push(pokemon)
            }
            this.setState({pokemonsData: newDataObject})
          }
          
    });
  }
  handleClick(event) {
    this.loadPokemons(event.next)
  }
  componentDidMount() {
    let URL = 'https://pokeapi.co/api/v2/pokemon/?limit=21'
    this.loadPokemons(URL, true)
  }

  render() {
      if(this.state.pokemonsData.results){
        return (
          <div>
            <PokemonList data={this.state.pokemonsData.results} />
            <button className='load-more' onClick={()=>this.handleClick(this.state.pokemonsData)}>Carregar Mais</button>
          </div>
        )
      }else{
        return(<div>Loading</div>)
      }
  }
}

export default PokemonWrap;
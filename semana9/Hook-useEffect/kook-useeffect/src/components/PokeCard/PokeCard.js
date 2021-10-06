import React, {setState, useEffect} from "react";
import axios from "axios";

const PokeCards = (props) => {

     const [pokemon, setPokemon] = setState({})

    const pegaPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(res => {
            setPokemon(response.data)
        }).catch(err => {
            alert(err)
        })
    }

    useEffect (() => {
        pegaPokemon(props.pokemon)
    },[props.pokemon])

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.weight}</h2>
            {pokemon.type && <h2>{pokemon.type[0].type.name}</h2>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.font_default} alt= {pokemon.name}/>
            )}
        </div>
    )
}
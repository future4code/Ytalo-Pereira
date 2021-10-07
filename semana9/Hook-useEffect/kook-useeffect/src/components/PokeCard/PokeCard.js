import axios from "axios";
import React, {useEffect, useState} from "react";

const PokeCards = () => {
    const [pokemon, setPOkemon] = useState({})

    const pegarPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(res => {
            setPOkemon(res.data)
        }).catch(err => {
            alert(err)
        })
    }

    useEffect (() => {
        pegarPokemon(props.pokemon)
    }, [props.pokemon])

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.weight}</h2>
            {pokemon.types && <h2>{pokemon.types[0].type.name}</h2>}
            {pokemon.sprites && (
                <img  src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}
export default PokeCards
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";


const App = (props) => {
 
  const [pokList, setPokList] = useState([])
  const [pokeName, setPokeName] = useState("")

   const ListaPokemon = (pokList) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(res => {
      setPokList(res.data.results)
    }).catch(err => {
      alert(err)
    })
  }

  // useEffect (() => {
  //   setListaPokemon(props.pokeName)
  // })

  // const handlePokeName = (event) => {
  //   Pokemon(event.target.value)
  // }
 
  return (
    <div>
      OI
    </div>
  )
}
export default App;
